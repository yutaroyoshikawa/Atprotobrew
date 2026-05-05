import type { ComponentProps, ReactNode } from "react";
import { Button, styled } from "tamagui";

interface AppButtonProps extends ComponentProps<typeof StyledButton> {
  onPress?: () => void;
  children?: ReactNode;
}

export function AppButton({ onPress, children, ...props }: AppButtonProps) {
  return (
    <StyledButton onPress={onPress} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button, {
  width: "100%",
  cursor: "pointer",
  flexDirection: "column",
  display: "flex",
  shrink: 0,

  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(200,220,255,0.5) 100%)",

  borderWidth: 1.5,
  borderColor: "rgba(52, 190, 237, 1.0)",

  boxShadow:
    "0 2px 8px rgba(100,160,240,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",

  hoverStyle: {
    borderColor: "rgba(100,160,240,1.0)",
    transition: { duration: 200, borderColor: "bouncy" },
  },
  pressStyle: {
    scale: 0.95,
    transition: { duration: 200, scale: "quick" },
  },
  focusVisibleStyle: {
    outlineWidth: 2,
    outlineStyle: "solid",
    outlineColor: "rgba(59,130,246,0.7)",
    outlineOffset: 2,
  },

  variants: {
    shape: {
      tile: {
        width: "100%",
        padding: 0,
        border: "none",
        fontWeight: 800,
        color: "rgba(56, 62, 63, 1.0)",
      },
      circle: {
        padding: 0,
        border: "none",
        width: 40,
        height: 40,
        borderRadius: 9999,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },
    },
    size: {
      large: {
        height: 60,
        width: 60,
      },
    },
  } as const,

  defaultVariants: {
    shape: "tile",
  },
});
