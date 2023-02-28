import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

interface Props {
  open: boolean;
}

export const useOpenLayout = ({open}: Props) => {
  const getSharedValue = useCallback(() => {
    if (open) {
      return {
        container: {
          opacity: 1,
        },
        modalContainer: {
          top: 0,
        },
      };
    } else {
      return {
        container: {
          opacity: 0,
        },
        modalContainer: {
          top: 1000,
        },
      };
    }
  }, [open]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [open]);

  return shared;
};
