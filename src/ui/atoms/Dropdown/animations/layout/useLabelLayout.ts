import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

interface Props {
  hasSelected: boolean;
}

export const useLabelLayout = ({hasSelected}: Props) => {
  const getSharedValue = useCallback(() => {
    if (hasSelected) {
      return {
        top: 0,
        fontSize: 14,
        marginBottom: 5,
      };
    } else {
      return {
        top: 26,
        fontSize: 18,
        marginBottom: 0,
      };
    }
  }, [hasSelected]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [hasSelected]);

  return shared;
};
