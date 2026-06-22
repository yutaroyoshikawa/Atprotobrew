import type { ComponentProps, ReactNode } from "react";
import { Button, styled, Text, useTheme } from "tamagui";

interface AppButtonProps extends ComponentProps<typeof StyledButton> {
	onPress?: () => void;
	children?: ReactNode;
}

export function AppButton({ onPress, children, ...props }: AppButtonProps) {
	const t = useTheme();

	return (
		<StyledButton onPress={onPress} {...props}>
			<StyledText color={t.text.val}>{children}</StyledText>
		</StyledButton>
	);
}

const StyledButton = styled(Button, {
	width: "100%",
	cursor: "pointer",
	height: 44,
	justifyContent: "center",
	alignItems: "center",
	borderWidth: 2,
	borderRadius: "$4",
	color: "$textContrastMedium",

	transition: {
		scale: "bouncy",
		backgroundImage: "bouncy",
	},

	backgroundImage: "linear-gradient(177deg, $primaryGradientStart 20%, $primaryGradientEnd 100%)",

	pressStyle: { scale: 0.95 },

	variants: {
		shape: {
			tile: {
				width: "100%",
				padding: 0,
			},
			circle: {
				padding: 0,
				width: 40,
				height: 40,
				borderRadius: 9999,
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
				borderColor: "$buttonBorder",
			},
		},
		size: { large: { height: 60, width: 60 } },
	} as const,

	defaultVariants: { shape: "tile" },
});

const StyledText = styled(Text, {
	fontWeight: "bold",
	color: "$textContrastMedium",
});
