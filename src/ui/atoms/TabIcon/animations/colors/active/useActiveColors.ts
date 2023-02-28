import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  active: boolean;
}

export const useActiveColors = ({active}: Props) => {
  const shared = useColorInterpolation({check: active, duration: 150});
  const {styles, activeStyles} = useColors();

  const icon = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [styles.icon.color, activeStyles.icon.color],
      ),
    };
  });

  const likesSentIcon = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [styles.likesSentIcon.color, activeStyles.likesSentIcon.color],
      ),
    };
  });

  const smallIcon = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        shared.value,
        [0, 1],
        [styles.smallIcon.color, activeStyles.smallIcon.color],
      ),
    };
  });

  return {activeColors: {icon, likesSentIcon, smallIcon}};
};
