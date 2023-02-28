import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  checked: boolean;
}

export const useCheckedColors = ({checked}: Props) => {
  const shared = useColorInterpolation({check: checked, duration: 150});
  const {styles, checkedStyles} = useColors();

  const container = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [
          styles.container.backgroundColor,
          checkedStyles.container.backgroundColor,
        ],
      ),
      borderColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.container.borderColor, checkedStyles.container.borderColor],
      ),
    };
  });

  const center = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.center.backgroundColor, checkedStyles.center.backgroundColor],
      ),
    };
  });

  return {checkedColors: {container, center}};
};
