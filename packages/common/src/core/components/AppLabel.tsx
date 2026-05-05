import type { ComponentProps, ReactNode } from "react";
import { Label, styled } from "tamagui";

interface AppLabelProps extends ComponentProps<typeof StyledLabel> {
  children: ReactNode;
  htmlFor?: string;
}

export function AppLabel({ children, htmlFor, ...props }: AppLabelProps) {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
}

const StyledLabel = styled(Label, {
  height: "max-content",
  fontSize: "0.875rem",
  lineHeight: "$1",
  fontWeight: 800,
  color: "gray",
});
