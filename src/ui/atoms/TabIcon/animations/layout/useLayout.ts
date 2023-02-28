import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export const useLayout = (isUnread: boolean) => {
  const getSharedValue = useCallback(() => {
    if (isUnread) {
      return {
        unread: {
          height: 8,
          width: 8,
          borderRadius: 4,
        },
      };
    } else {
      return {
        unread: {
          height: 0,
          width: 0,
          borderRadius: 0,
        },
      };
    }
  }, [isUnread]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [isUnread]);

  return shared;
};
