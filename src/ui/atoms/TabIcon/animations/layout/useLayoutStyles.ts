import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {useLayout} from './useLayout';

export const useLayoutStyles = (isUnread: boolean) => {
  const shared = useLayout(isUnread);

  const unread = useAnimatedStyle(() => {
    return {
      height: withTiming(shared.value!.unread.height, {
        duration: 250,
      }),
      width: withTiming(shared.value!.unread.width, {
        duration: 250,
      }),
      borderRadius: withTiming(shared.value!.unread.borderRadius, {
        duration: 250,
      }),
    };
  });

  return {layout: {unread}};
};
