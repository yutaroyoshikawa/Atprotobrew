import { type ComponentProps, type ReactNode } from "react";
import { styled, View } from "tamagui";
import { aeroGlassShadow } from "../../styles/aero-shadow";

interface AppCardProps extends ComponentProps<typeof StyledView> {
  children: ReactNode;
}

export function AppCard({ children, ...props }: AppCardProps) {
  return <StyledView {...props}>{children}</StyledView>;
}

const StyledView = styled(View, {
  width: "100%",
  boxSizing: "border-box",
  background: "$white",
  borderRadius: "$8",
  paddingHorizontal: "$8",
  paddingVertical: "$8",
  boxShadow: aeroGlassShadow(),
});
