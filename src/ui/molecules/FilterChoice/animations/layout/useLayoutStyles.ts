import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {useLayout} from './useLayout';

export const useLayoutStyles = (checked: boolean) => {
  const shared = useLayout(checked);

  const tabContainer = useAnimatedStyle(() => {
    return {
      left: withTiming(shared.value!.tabContainer.left, {
        duration: 150,
      }),
    };
  });

  return {layout: {tabContainer}};
};
