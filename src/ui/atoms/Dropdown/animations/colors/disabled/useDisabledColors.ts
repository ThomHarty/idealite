import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  disabled: boolean;
}

export const useDisabledColors = ({disabled}: Props) => {
  const shared = useColorInterpolation({check: disabled});
  const {styles, disabledStyles} = useColors();

  const input = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.input.borderColor, disabledStyles.input.borderColor],
      ),
    };
  });

  return {disabledColors: {input}};
};
