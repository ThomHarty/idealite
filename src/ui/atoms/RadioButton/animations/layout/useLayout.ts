import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export const useLayout = (checked: boolean) => {
  const getSharedValue = useCallback(() => {
    if (checked) {
      return {
        center: {
          height: 12,
          width: 12,
          borderRadius: 6,
        },
      };
    } else {
      return {
        center: {
          height: 0,
          width: 0,
          borderRadius: 0,
        },
      };
    }
  }, [checked]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [checked]);

  return shared;
};
