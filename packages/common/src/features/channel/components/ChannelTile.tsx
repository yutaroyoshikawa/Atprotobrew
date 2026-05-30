import { type ComponentProps } from "react";
import { styled, View } from "tamagui";
export const ChannelTile = styled(View, {
  width: "100%",
  height: 128,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$8",

  variants: {
    variant: {
      filled: {
        boxShadow:
          "0 2px 8px rgba(100,160,240,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
        hoverStyle: {
          boxShadow:
            "0 5px 8px rgba(100,160,240,0.65), inset 0 1px 0 rgba(255,255,255,0.7)",
        },
      },
      empty: {
        backgroundColor: "$accent",
        borderStyle: "dashed",
      },
    },
  } as const,

  defaultVariants: { variant: "filled" },
});

export type ChannelTileProps = ComponentProps<typeof ChannelTile>;
