import { styled, View } from "tamagui";

export function EmptyChannelTile() {
  return <StyledTile aria-hidden />;
}

const StyledTile = styled(View, {
  width: "100%",
  height: 128,
  border: "2px dashed white",
  background: "rgba(255, 255, 255, 0.15)",
  borderEndEndRadius: "$8",
  borderEndStartRadius: "$8",
  borderStartEndRadius: "$8",
  borderStartStartRadius: "$8",
});
