import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  online: boolean;
}

export const useOnlineColors = ({online}: Props) => {
  const shared = useColorInterpolation({check: online, duration: 150});
  const {styles, onlineStyles} = useColors();

  const circle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.circle.backgroundColor, onlineStyles.circle.backgroundColor],
      ),
    };
  });

  return {onlineColors: {circle}};
};
