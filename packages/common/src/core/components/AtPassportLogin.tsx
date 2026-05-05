import { AtPassportUI, AtPassportIcon } from "@atpassport/client/ui";
import { ComponentProps } from "react";
import { styled, Text, View } from "tamagui";

interface AtPassportLoginProps extends ComponentProps<typeof StyledView> {}

export function AtPassportLogin(props: AtPassportLoginProps) {
  return (
    <StyledView {...props}>
      <StyledText>{AtPassportUI.ja.title}</StyledText>
    </StyledView>
  );
}

const StyledView = styled(View, {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justify: "center",
  items: "center",
  columnGap: "$space.2",
  background: "white",
  borderWidth: 1,
  borderColor: "#1c7ed6",
  borderEndEndRadius: "$radius.3",
  borderEndStartRadius: "$radius.3",
  borderStartEndRadius: "$radius.3",
  borderStartStartRadius: "$radius.3",
  paddingInline: "$2",
  paddingBlock: "$2",
});

const StyledText = styled(Text, {
  color: "#1c7ed6",
  fontWeight: 800,
});
