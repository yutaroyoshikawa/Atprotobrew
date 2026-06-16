import type { SizeBucket } from "@atprotobrew/common/launcher/widgetGrid";
import type { WidgetLauncherSnapshot } from "@atprotobrew/common/launcher/widgetTypes";
import { HStack, Image, Link, Spacer, VStack } from "@expo/ui/swift-ui";
import {
  background,
  clipShape,
  containerBackground,
  frame,
  padding,
  resizable,
  shadow,
  shapes,
  widgetURL,
} from "@expo/ui/swift-ui/modifiers";
import { createWidget, type WidgetEnvironment } from "expo-widgets";

interface LauncherWidgetComponentProps extends WidgetLauncherSnapshot {
  color: {
    light: {
      bg: string;
      cardBg: string;
    };
    dark: {
      bg: string;
      cardBg: string;
    };
  };
}

const LauncherWidgetComponent = (
  props: LauncherWidgetComponentProps,
  env: WidgetEnvironment,
) => {
  "widget";

  const theme = env.colorScheme ?? "light";

  const ICON = 52;
  const ICON_RADIUS = 10;
  const CARD_RADIUS = 16;
  const SHADOW_COLOR = "#4064A0F0";

  const bucket: SizeBucket =
    env.widgetFamily === "systemSmall"
      ? "small"
      : env.widgetFamily === "systemMedium"
        ? "medium"
        : "large";

  const rows = props.rowsBySize?.[bucket] ?? [];

  const base = [
    padding({ all: 8 }),
    containerBackground(props.color[theme].bg, "widget"),
  ];

  const grid = (
    <VStack>
      {rows.map((row, i) => (
        <HStack key={i}>
          {row.map((cell, j) => {
            const cellContent = (
              <VStack
                modifiers={[
                  padding({ all: 10 }),
                  background(
                    props.color[theme].cardBg,
                    shapes.roundedRectangle({ cornerRadius: CARD_RADIUS }),
                  ),
                  clipShape("roundedRectangle", CARD_RADIUS),
                  shadow({ color: SHADOW_COLOR, radius: 4, x: 0, y: 2 }),
                ]}
              >
                {cell.hasIcon ? (
                  <Image
                    uiImage={cell.iconPath}
                    modifiers={[
                      resizable(),
                      frame({ width: ICON, height: ICON }),
                      clipShape("roundedRectangle", ICON_RADIUS),
                    ]}
                  />
                ) : (
                  <Image systemName="square.dashed" size={ICON} />
                )}
              </VStack>
            );

            // small かそれ以外かで出し分ける中身の要素を定義
            const element =
              bucket === "small" ? (
                cellContent
              ) : (
                <Link key={j} destination={cell.url}>
                  {cellContent}
                </Link>
              );

            // 2番目以降の要素 (j > 0) の前に <Spacer /> を挟む
            return (
              <>
                {j > 0 && <Spacer />}
                {element}
              </>
            );
          })}
        </HStack>
      ))}
    </VStack>
  );

  if (bucket === "small") {
    return (
      <VStack modifiers={[...base, widgetURL("atprotobrew://launcher")]}>
        {grid}
      </VStack>
    );
  }

  return <VStack modifiers={base}>{grid}</VStack>;
};

export default createWidget("LauncherWidget", LauncherWidgetComponent);
