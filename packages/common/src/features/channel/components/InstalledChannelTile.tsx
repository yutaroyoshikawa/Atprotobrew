import { type ComponentProps } from "react";
import { Image, styled, View } from "tamagui";
import { AppVStack } from "../../../core/components/AppVStack";
import { AppText } from "../../../core/components/AppText";

interface StoreChannelTileProps extends Pick<
  ComponentProps<typeof StyledTile>,
  "render"
> {
  channelName: string;
  thumbnailUrl: string;
}

export function InstalledChannelTile({
  render,
  channelName,
  thumbnailUrl,
}: StoreChannelTileProps) {
  return (
    <StyledTile render={render}>
      <AppVStack style={{ alignItems: "center" }}>
        <StyledThumbnail src={thumbnailUrl} width={80} height={80} />
        <AppText
          style={{ textAlign: "center", fontWeight: 800, color: "#666" }}
        >
          {channelName}
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

const StyledThumbnail = styled(Image, {
  width: 80,
  height: 80,
  color: "#1c7ed6",
  items: "center",
});
