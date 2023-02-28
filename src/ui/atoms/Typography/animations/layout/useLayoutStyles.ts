import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Size} from '../../Typography.types';

import {useLayout} from './useLayout';

export const useLayoutStyles = (size: Size) => {
  const shared = useLayout(size);

  const text = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(shared.value!.text.fontSize, {
        duration: 250,
      }),
    };
  });

  return {layout: {text}};
};
