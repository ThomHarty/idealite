import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export const useLayout = (isIdeas: boolean) => {
  const getSharedValue = useCallback(() => {
    if (isIdeas) {
      return {
        tabContainer: {left: 0},
      };
    } else {
      return {
        tabContainer: {left: 120},
      };
    }
  }, [isIdeas]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [isIdeas]);

  return shared;
};
