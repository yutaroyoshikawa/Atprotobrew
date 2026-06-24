import type { Agent } from "@atproto/lex";
import { useLingui } from "@lingui/react/macro";
import { useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { atoms as a } from "../../../styles/alf";
import { useThemeColors } from "../../../styles/theme";
import { useFollowActions } from "../modules/useFollowActions";
import { useFollowers, useFollows } from "../modules/useSocialGraph";
import { SocialGraphUserRow } from "./SocialGraphUserRow";

type TabKey = "follows" | "followers";

interface SocialGraphListProps {
	actor: string;
	agent: Agent;
	currentUserDid: string | undefined;
	initialTab?: TabKey;
	onNavigateToProfile?: (did: string) => void;
}

export function SocialGraphList({
	actor,
	agent,
	currentUserDid,
	initialTab = "follows",
	onNavigateToProfile,
}: SocialGraphListProps) {
	const tc = useThemeColors();
	const { t } = useLingui();
	const layout = useWindowDimensions();

	const routes = useMemo(
		() => [
			{ key: "follows", title: t`フォロー中` },
			{ key: "followers", title: t`フォロワー` },
		],
		[t],
	);

	const [index, setIndex] = useState(initialTab === "follows" ? 0 : 1);

	const followsQuery = useFollows(actor, agent);
	const followersQuery = useFollowers(actor, agent);
	const { handleFollow, handleUnfollow, resolvedFollowUri, isMutating } = useFollowActions(agent);

	const renderSubList = (type: TabKey) => {
		const query = type === "follows" ? followsQuery : followersQuery;
		const profiles =
			type === "follows"
				? (followsQuery.data?.pages.flatMap((page) => page.follows) ?? [])
				: (followersQuery.data?.pages.flatMap((page) => page.followers) ?? []);

		if (query.isPending) {
			return (
				<View style={[a.flex_1, a.justify_center, a.items_center]}>
					<ActivityIndicator />
				</View>
			);
		}

		if (query.isError) {
			return (
				<View style={[a.flex_1, a.justify_center, a.items_center]}>
					<Text style={{ color: tc.textContrastMedium }}>{t`読み込みエラー`}</Text>
				</View>
			);
		}

		return (
			<FlatList
				data={profiles}
				keyExtractor={(item) => item.did}
				renderItem={({ item }) => (
					<SocialGraphUserRow
						profile={item}
						currentUserDid={currentUserDid}
						followUri={resolvedFollowUri(item)}
						onFollow={handleFollow}
						onUnfollow={(uri) => handleUnfollow(item.did, uri)}
						isMutating={isMutating(item.did)}
						onNavigateToProfile={onNavigateToProfile}
					/>
				)}
				onEndReached={() => {
					if (query.hasNextPage && !query.isFetchingNextPage) {
						query.fetchNextPage();
					}
				}}
				onEndReachedThreshold={0.3}
				ListFooterComponent={
					query.isFetchingNextPage ? (
						<View style={{ paddingVertical: 16 }}>
							<ActivityIndicator />
						</View>
					) : null
				}
				ListEmptyComponent={
					<View style={[a.flex_1, a.justify_center, a.items_center, { paddingVertical: 48 }]}>
						<Text style={{ color: tc.textContrastMedium }}>
							{type === "follows" ? t`フォロー中のユーザーがいません` : t`フォロワーがいません`}
						</Text>
					</View>
				}
			/>
		);
	};

	// 各タブの画面を定義
	const renderScene = SceneMap({
		follows: () => renderSubList("follows"),
		followers: () => renderSubList("followers"),
	});

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
			renderTabBar={(props) => (
				<TabBar
					{...props}
					indicatorStyle={{ backgroundColor: tc.accent, height: 2 }}
					style={{
						backgroundColor: "transparent",
						borderBottomWidth: 1,
						borderBottomColor: tc.bgContrast25,
						elevation: 0,
						shadowOpacity: 0,
					}}
					activeColor={tc.accent}
					inactiveColor={tc.textContrastMedium}
				/>
			)}
		/>
	);
}
