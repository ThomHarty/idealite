import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

interface Props {
  isOpen: boolean;
}

export const useDropdownLayout = ({isOpen}: Props) => {
  const getSharedValue = useCallback(() => {
    if (isOpen) {
      return {
        opacity: 1,
        height: 200,
      };
    } else {
      return {
        opacity: 0,
        height: 200,
      };
    }
  }, [isOpen]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [isOpen]);

  return shared;
};
