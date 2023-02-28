import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {IBorderedSvgProps} from '../../BorderedSvg.types';
import {useLayout} from './useLayout';

export const useLayoutStyles = (size: IBorderedSvgProps['size']) => {
  const shared = useLayout(size);

  const container = useAnimatedStyle(() => {
    return {
      height: withTiming(shared.value!.container.height, {
        duration: 250,
      }),
      width: withTiming(shared.value!.container.width, {
        duration: 250,
      }),
    };
  });

  const svgContainer = useAnimatedStyle(() => {
    return {
      height: withTiming(shared.value!.svgContainer.height, {
        duration: 250,
      }),
      width: withTiming(shared.value!.svgContainer.width, {
        duration: 250,
      }),
    };
  });

  return {layout: {container, svgContainer}};
};
