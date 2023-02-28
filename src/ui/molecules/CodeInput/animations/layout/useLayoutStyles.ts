import {useAnimatedStyle, withTiming} from 'react-native-reanimated';

import {useErrorLayout} from './useErrorLayout';

interface Props {
  hasError: boolean;
}

export const useLayoutStyles = ({hasError}: Props) => {
  const errorShared = useErrorLayout(hasError);

  const error = useAnimatedStyle(() => {
    return {
      opacity: withTiming(errorShared.value!.opacity, {
        duration: 250,
      }),
    };
  });

  return {layout: {error}};
};
