import { styled, useTheme, View, XStack } from "tamagui";
import { AppButton } from "./AppButton";
import { LogOut, Settings } from "lucide-react-native";
import { AtprotobrewLogoType } from "./AtprotobrewLogoType";

interface AppFooterProps {
  onRequestLogout: () => Promise<void> | void;
  onRequestOpenSettings?: () => void;
}

export function AppFooter({
  onRequestLogout,
  onRequestOpenSettings,
}: AppFooterProps) {
  const t = useTheme();

  return (
    <StyledWrapper>
      <Background></Background>

      <StyledNavigation>
        <AppButton
          onPress={onRequestOpenSettings}
          shape="circle"
          size="large"
          aria-label="設定"
        >
          <Settings color={t.textContrastMedium.val} />
        </AppButton>

        <View height={80} width={120} paddingTop="$4">
          <AtprotobrewLogoType />
        </View>

        <AppButton
          onPress={onRequestLogout}
          shape="circle"
          size="large"
          aria-label="ログアウト"
        >
          <LogOut color={t.textContrastMedium.val} />
        </AppButton>
      </StyledNavigation>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(View, {
  width: "100%",
  position: "relative",
});

const StyledNavigation = styled(XStack, {
  width: "100%",
  height: 50,
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: "$5",
  paddingBottom: "$10",
  zIndex: 1,
});

const Background = styled(View, {
  position: "absolute",
  zIndex: 0,
  bottom: 0,
  width: "100%",
  height: 80,
  backgroundColor: "$bg",
});
