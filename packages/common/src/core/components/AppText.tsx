import { ComponentProps, type ReactNode } from "react";
import { Text, styled } from "tamagui";

interface AppTextProps extends ComponentProps<typeof StyledText> {
  children: ReactNode;
}

export function AppText({ children, ...props }: AppTextProps) {
  return <StyledText {...props}>{children}</StyledText>;
}

const StyledText = styled(Text, {
  fontSize: "0.875rem",

  variants: {
    kind: {
      default: {
        width: "100%",
      },
      error: {
        color: "red",
        fontSize: "0.75rem",
      },
    },
  } as const,

  defaultVariants: {
    kind: "default",
  },
});
