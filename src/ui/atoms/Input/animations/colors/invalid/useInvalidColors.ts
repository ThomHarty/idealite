import {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {useColorInterpolation} from '../../../../../../shared/hooks';
import {useColors} from './useColors';

interface Props {
  invalid: boolean;
}

export const useInvalidColors = ({invalid}: Props) => {
  const shared = useColorInterpolation({check: invalid});
  const {styles, invalidStyles} = useColors();

  const input = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        shared.value,
        [0, 1],
        [styles.input.borderColor, invalidStyles.input.borderColor],
      ),
    };
  });

  return {invalidColors: {input}};
};
