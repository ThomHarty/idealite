import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

interface Props {
  active: boolean;
}

export const useActiveLayout = ({active}: Props) => {
  const getSharedValue = useCallback(() => {
    if (active) {
      return {
        opacity: 1,
      };
    } else {
      return {
        opacity: 0,
      };
    }
  }, [active]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [active]);

  return shared;
};
