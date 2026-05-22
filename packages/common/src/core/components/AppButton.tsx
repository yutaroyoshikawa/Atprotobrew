import { type ComponentProps, type ReactNode } from "react";
import { Button, styled, isWeb, Text } from "tamagui";

interface AppButtonProps extends ComponentProps<typeof StyledButton> {
  onPress?: () => void;
  children?: ReactNode;
}

export function AppButton({ onPress, children, ...props }: AppButtonProps) {
  return (
    <StyledButton onPress={onPress} {...props}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
}

const StyledButton = styled(Button, {
  width: "100%",
  cursor: "pointer",
  height: 44,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1.5,
  borderColor: "$glassBorderAqua",
  borderRadius: "$3",

  backgroundImage:
    "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(200,220,255,1) 100%)",
  boxShadow:
    "0 2px 8px rgba(100,160,240,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",

  hoverStyle: { borderColor: "$glassBorderAquaHover" },
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
      },
    },
    size: { large: { height: 60, width: 60 } },
  } as const,

  defaultVariants: { shape: "tile" },
});

const StyledText = styled(Text, {
  color: "$buttonTileLabel",
  fontWeight: "800",
});
