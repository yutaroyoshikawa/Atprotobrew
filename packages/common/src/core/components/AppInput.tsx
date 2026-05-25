import type { ComponentProps } from "react";
import { Input, styled } from "tamagui";

interface AppInputProps extends ComponentProps<typeof StyledInput> {}

export function AppInput({ prefix, ...props }: AppInputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled(Input, {
  width: "100%",
  boxSizing: "border-box",

  borderWidth: 3,
  borderRadius: "$3",
  borderColor: "$inputBorder",

  fontSize: 14,
  color: "$text",

  backgroundColor: "$bgContrast50",

  placeholderTextColor: "$textContrastLow",

  boxShadow: [
    "inset 0 1px 0 rgba(255,255,255,0.95)",
    "inset 0 -1px 2px rgba(120,160,210,0.15)",
    "0 1px 2px rgba(80,130,200,0.12)",
    "0 4px 12px rgba(120,170,230,0.18)",
  ].join(", "),

  outlineWidth: 0,
  outlineStyle: "none",

  hoverStyle: {
    transition: {
      duration: 200,
    },
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.65) 45%, rgba(215,233,253,0.55) 100%)",
    boxShadow: [
      "inset 0 1px 0 rgba(255,255,255,1)",
      "inset 0 -1px 2px rgba(120,160,210,0.18)",
      "0 1px 2px rgba(80,130,200,0.14)",
      "0 6px 16px rgba(120,170,230,0.22)",
    ].join(", "),
  },

  focusStyle: {
    borderColor: "rgba(125, 185, 255, 0.95)",
    outlineWidth: 0,
    outlineStyle: "none",
  },

  disabledStyle: {
    opacity: 0.55,
    backgroundImage:
      "linear-gradient(180deg, rgba(245,247,250,0.8) 0%, rgba(225,232,242,0.6) 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
  },
});
