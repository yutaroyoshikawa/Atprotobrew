import { type ComponentProps } from "react";
import { Separator, styled } from "tamagui";

interface AppSeparatorProps extends ComponentProps<typeof StyledSeparator> {}

export function AppSeparator(props: AppSeparatorProps) {
  return <StyledSeparator {...props} />;
}

const StyledSeparator = styled(Separator, {
  borderColor: "rgba(200, 200, 200, 1)",
});
