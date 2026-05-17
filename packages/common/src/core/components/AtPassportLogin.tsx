import { AtPassportUI, AtPassportIcon } from "@atpassport/client/ui";
import { type ComponentProps } from "react";
import { Button, styled, Text, View } from "tamagui";
import { type AppLanguage } from "../types/i18n";

interface AtPassportLoginProps extends ComponentProps<typeof StyledButton> {
  lang: AppLanguage;
}

export function AtPassportLogin(props: AtPassportLoginProps) {
  return (
    <StyledButton {...props}>
      <StyledIcon />
      {props.lang === "ja" && <StyledText>{AtPassportUI.ja.title}</StyledText>}
      {props.lang === "en" && <StyledText>{AtPassportUI.en.title}</StyledText>}
    </StyledButton>
  );
}

const StyledButton = styled(Button, {
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
  text: "center",
  color: "#1c7ed6",
  fontWeight: 800,
});

const StyledIcon = styled(AtPassportIcon, {
  color: "#1c7ed6",
});
