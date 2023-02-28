import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../shared/hooks';
import {AnimateProps} from '../../Typography.types';

export const useColors = ({zero, one, check}: AnimateProps) => {
  const shared = useColorInterpolation({check, duration: 150});

  const textColor = useAnimatedStyle(() => {
    return {
      color: interpolateColor(shared.value, [0, 1], [zero, one]),
    };
  });

  return textColor;
};
