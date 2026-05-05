import { type ComponentProps, type ReactNode } from "react";
import { styled, View } from "tamagui";

interface AppCardProps extends ComponentProps<typeof StyledView> {
  children: ReactNode;
}

export function AppCard({ children, ...props }: AppCardProps) {
  return <StyledView {...props}>{children}</StyledView>;
}

const StyledView = styled(View, {
  width: "100%",
  background: "white",
  borderEndEndRadius: "$8",
  borderEndStartRadius: "$8",
  borderStartEndRadius: "$8",
  borderStartStartRadius: "$8",
  paddingInline: "$8",
  paddingBlock: "$8",
  boxShadow:
    "0 2px 8px rgba(100,160,240,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
});
