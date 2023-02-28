import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  disabled: boolean;
}

export const useDisabledColors = ({disabled}: Props) => {
  const shared = useColorInterpolation({check: disabled, duration: 150});
  const {styles, disabledStyles} = useColors();

  const container = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [
          styles.container.backgroundColor,
          disabledStyles.container.backgroundColor,
        ],
      ),
      borderColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.container.borderColor, disabledStyles.container.borderColor],
      ),
    };
  });

  return {disabledColors: {container}};
};
