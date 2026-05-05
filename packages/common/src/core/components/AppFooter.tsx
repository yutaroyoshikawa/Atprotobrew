import { styled, View, XStack } from "tamagui";
import { AppH1 } from "./AppH1";
import { AppButton } from "./AppButton";
import { LogOut, Settings } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";

interface AppFooterProps {
  onRequestLogout: () => Promise<void> | void;
}

export function AppFooter({ onRequestLogout }: AppFooterProps) {
  return (
    <StyledWrapper>
      <Background>
        <StyledSvg viewBox="0 0 800 20">
          <Path
            fill="rgba(255,255,255,0.65)"
            d="M0,10 C100,0 200,20 300,10 C400,0 500,20 600,10 C700,0 800,20 800,10 L800,0 L0,0 Z"
          />
        </StyledSvg>
      </Background>

      <StyledNavigation>
        <AppButton type="button" shape="circle" size="large" aria-label="設定">
          <StyledSetting />
        </AppButton>

        <AppH1 style={{ color: "hsl(205,72%,68%)" }}>Atprotobrew</AppH1>

        <AppButton
          onPress={onRequestLogout}
          type="button"
          shape="circle"
          size="large"
          aria-label="ログアウト"
        >
          <StyledLogout />
        </AppButton>
      </StyledNavigation>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(View, {
  width: "100%",
  background: "hsl(195,50%,95%)",
  position: "relative",
});

const StyledNavigation = styled(XStack, {
  width: "100%",
  items: "center",
  justify: "space-between",
  height: 100,
  paddingInline: "$space.10",
  paddingBlockEnd: "$space.10",
});

const Background = styled(View, {
  position: "fixed",
  width: "100%",
});

const StyledSvg = styled(Svg, {
  width: "100%",
});

const StyledSetting = styled(Settings, {
  color: "#666",
});

const StyledLogout = styled(LogOut, {
  color: "#666",
});
