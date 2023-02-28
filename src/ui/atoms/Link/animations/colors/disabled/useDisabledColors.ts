import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  disabled: boolean;
}

export const useDisabledColors = ({disabled}: Props) => {
  const shared = useColorInterpolation({check: disabled});
  const {styles, disabledStyles} = useColors();

  const text = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [styles.text.color, disabledStyles.text.color],
      ),
    };
  });

  return {disabledColors: {text}};
};
