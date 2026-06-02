import { Image } from 'expo-image';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { atoms as a } from '@atprotobrew/common/alf';
import { useThemeColors } from '@atprotobrew/common/theme';

interface DragOverlayProps {
  dragX: SharedValue<number>;
  dragY: SharedValue<number>;
  isDragging: SharedValue<boolean>;
  iconUri: string | null;
  cellSize: number;
}

export function DragOverlay({
  dragX,
  dragY,
  isDragging,
  iconUri,
  cellSize,
}: DragOverlayProps) {
  const tc = useThemeColors();

  const overlayStyle = useAnimatedStyle(() => {
    const half = cellSize / 2;
    return {
      transform: [
        { translateX: dragX.value - half },
        { translateY: dragY.value - half },
        { scale: withSpring(isDragging.value ? 1.1 : 1) },
      ],
      opacity: isDragging.value ? 1 : 0,
      shadowColor: tc.text,
    };
  });

  return (
    <Animated.View
      style={[
        a.absolute,
        a.z_999,
        { width: cellSize, height: cellSize, shadowOpacity: 0.3, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 8 },
        overlayStyle,
      ]}
      pointerEvents="none"
    >
      {iconUri && (
        <Image
          source={{ uri: iconUri }}
          style={[a.flex_1, a.rounded_2xl]}
          contentFit="cover"
        />
      )}
    </Animated.View>
  );
}
