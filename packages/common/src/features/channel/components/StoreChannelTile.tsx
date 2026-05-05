import { type ComponentProps } from "react";
import { styled, View } from "tamagui";
import { AppVStack } from "../../../core/components/AppVStack";
import { AppText } from "../../../core/components/AppText";
import { Svg, Rect, Path } from "react-native-svg";

interface StoreChannelTileProps extends Pick<
  ComponentProps<typeof StyledTile>,
  "render"
> {}

export function StoreChannelTile({ render }: StoreChannelTileProps) {
  return (
    <StyledTile render={render}>
      <AppVStack style={{ alignItems: "center" }}>
        <StyledIcon viewBox="0 0 36 36" fill="#1c7ed6">
          <Rect x="5" y="14" width="20" height="15" rx="3" />
          <Path
            d="M25 17 Q32 17 32 22 Q32 27 25 27"
            stroke="#1c7ed6"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <Path
            d="M10 9 Q10 5 14 5 Q14 9 18 9 Q18 5 22 5 Q22 9 26 9"
            stroke="#1c7ed6"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.85"
          />
          <Rect x="9" y="29" width="16" height="2" rx="1" fillOpacity="0.5" />
        </StyledIcon>
        <AppText
          style={{ textAlign: "center", fontWeight: 800, color: "#666" }}
        >
          Store
        </AppText>
      </AppVStack>
    </StyledTile>
  );
}

const StyledTile = styled(View, {
  width: "100%",
  height: 128,
  display: "flex",
  border: "2px solid white",
  justify: "center",
  items: "center",
  background: "rgba(255, 255, 255, 0.60)",
  borderEndEndRadius: "$8",
  borderEndStartRadius: "$8",
  borderStartEndRadius: "$8",
  borderStartStartRadius: "$8",
  boxShadow:
    "0 2px 8px rgba(100,160,240,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",

  hoverStyle: {
    boxShadow:
      "0 5px 8px rgba(100,160,240,0.65), inset 0 1px 0 rgba(255,255,255,0.7)",
  },
});

const StyledIcon = styled(Svg, {
  width: 80,
  height: 80,
  color: "#1c7ed6",
  items: "center",
});
