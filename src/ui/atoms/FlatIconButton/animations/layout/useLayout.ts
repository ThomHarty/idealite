import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

interface Props {
  pressed: boolean;
  disabled: boolean;
}

export const useLayout = ({pressed, disabled}: Props) => {
  const getSharedValue = useCallback(() => {
    if (disabled) {
      return {opacity: 0.5};
    }
    if (pressed) {
      return {opacity: 0.75};
    }
    return {opacity: 1};
  }, [pressed, disabled]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    (shared.value = getSharedValue()),
      {
        duration: 250,
      };
  }, [pressed, disabled]);

  return shared;
};
