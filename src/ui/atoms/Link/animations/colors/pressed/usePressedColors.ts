import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  pressed: boolean;
}

export const usePressedColors = ({pressed}: Props) => {
  const shared = useColorInterpolation({check: pressed});
  const {styles, pressedStyles} = useColors();

  const text = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [styles.text.color, pressedStyles.text.color],
      ),
    };
  });

  return {pressedColors: {text}};
};
