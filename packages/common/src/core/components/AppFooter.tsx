import { styled, View, XStack, isWeb } from "tamagui";
import { AppH1 } from "./AppH1";
import { AppButton } from "./AppButton";
import { LogOut, Settings } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "tamagui";

interface AppFooterProps {
  onRequestLogout: () => Promise<void> | void;
}

export function AppFooter({ onRequestLogout }: AppFooterProps) {
  const theme = useTheme();
  const iconColor = theme.tileLabel.get();

  return (
    <StyledWrapper>
      <Background>
        <Svg viewBox="0 0 800 20" width="100%">
          <Path
            fill="rgba(255,255,255,0.65)"
            d="M0,10 C100,0 200,20 300,10 C400,0 500,20 600,10 C700,0 800,20 800,10 L800,0 L0,0 Z"
          />
        </Svg>
      </Background>

      <StyledNavigation>
        <AppButton shape="circle" size="large" aria-label="設定">
          <Settings color={iconColor} />
        </AppButton>

        <AppH1 style={{ color: "hsl(205,72%,68%)" }}>Atprotobrew</AppH1>

        <AppButton
          onPress={onRequestLogout}
          shape="circle"
          size="large"
          aria-label="ログアウト"
        >
          <LogOut color={iconColor} />
        </AppButton>
      </StyledNavigation>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(View, {
  width: "100%",
  backgroundColor: "hsl(195,50%,95%)",
  position: "relative",
});

const StyledNavigation = styled(XStack, {
  width: "100%",
  height: 130,
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: "$10",
  paddingBottom: "$10",
  zIndex: 1,
});

const Background = styled(View, {
  position: "absolute",
  zIndex: 0,
  width: "100%",
});
