import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {useLayout} from './useLayout';

export const useLayoutStyles = (checked: boolean) => {
  const shared = useLayout(checked);

  const center = useAnimatedStyle(() => {
    return {
      right: withTiming(shared.value!.center.right, {
        duration: 250,
      }),
    };
  });

  return {layout: {center}};
};
