import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

import {Size} from '../../Typography.types';

export const useLayout = (size: Size) => {
  const getSharedValue = useCallback(() => {
    switch (size) {
      case 'heading1':
        return {
          text: {fontSize: 32},
        };
      case 'heading2':
        return {
          text: {fontSize: 28},
        };
      case 'heading3':
        return {
          text: {fontSize: 22},
        };
      case 'cta':
        return {
          text: {fontSize: 22},
        };
      case 'text':
        return {
          text: {fontSize: 18},
        };
      case 'small':
        return {
          text: {fontSize: 16},
        };
      case 'tiny':
        return {
          text: {fontSize: 14},
        };
      case 'tiniest':
        return {
          text: {fontSize: 12},
        };
    }
  }, [size]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [size]);

  return shared;
};
