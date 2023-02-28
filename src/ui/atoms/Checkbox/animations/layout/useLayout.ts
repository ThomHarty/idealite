import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export const useLayout = (checked: boolean) => {
  const getSharedValue = useCallback(() => {
    if (checked) {
      return {
        center: {
          opacity: 1,
        },
      };
    } else {
      return {
        center: {
          opacity: 0,
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
