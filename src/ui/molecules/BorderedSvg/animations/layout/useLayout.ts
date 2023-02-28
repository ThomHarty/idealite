import {useCallback, useEffect} from 'react';
import {useSharedValue} from 'react-native-reanimated';

import {IBorderedSvgProps} from '../../BorderedSvg.types';

export const useLayout = (size: IBorderedSvgProps['size']) => {
  const getSharedValue = useCallback(() => {
    switch (size) {
      case 'large':
        return {
          container: {
            height: 162,
            width: 146,
          },
          svgContainer: {
            height: 97,
            width: 105,
          },
        };
      case 'small':
        return {
          container: {
            height: 72,
            width: 68,
          },
          svgContainer: {
            height: 43,
            width: 48,
          },
        };
    }
  }, [size]);

  const shared = useSharedValue(getSharedValue());

  useEffect(() => {
    shared.value = getSharedValue();
  }, [size]);

  return shared;
};
