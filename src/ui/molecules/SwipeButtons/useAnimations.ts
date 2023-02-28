import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {SwipeButtonsAnimationsProps} from './SwipeButtons.types';

export const useAnimations = ({
  isSwipingLeft,
  isSwipingRight,
  disabled,
}: SwipeButtonsAnimationsProps) => {
  const rewind = useSharedValue(1);
  const cross = useSharedValue(1);
  const tick = useSharedValue(1);
  const star = useSharedValue(1);

  if (isSwipingLeft) {
    rewind.value = withTiming(0.5, {duration: 250});
    cross.value = withTiming(1, {duration: 250});
    tick.value = withTiming(0.5, {duration: 250});
    star.value = withTiming(0.5, {duration: 250});
  }
  if (isSwipingRight) {
    rewind.value = withTiming(0.5, {duration: 250});
    cross.value = withTiming(0.5, {duration: 250});
    tick.value = withTiming(1, {duration: 250});
    star.value = withTiming(0.5, {duration: 250});
  }
  if (disabled) {
    rewind.value = withTiming(0.5, {duration: 250});
    cross.value = withTiming(0.5, {duration: 250});
    tick.value = withTiming(0.5, {duration: 250});
    star.value = withTiming(0.5, {duration: 250});
  }
  if (!disabled && !isSwipingLeft && !isSwipingRight) {
    rewind.value = withTiming(1, {duration: 250});
    cross.value = withTiming(1, {duration: 250});
    tick.value = withTiming(1, {duration: 250});
    star.value = withTiming(1, {duration: 250});
  }

  const rewindStyle = useAnimatedStyle(() => {
    return {opacity: rewind.value};
  });

  const crossStyle = useAnimatedStyle(() => {
    return {opacity: cross.value};
  });

  const tickStyle = useAnimatedStyle(() => {
    return {opacity: tick.value};
  });

  const starStyle = useAnimatedStyle(() => {
    return {opacity: star.value};
  });

  return {
    rewindStyle,
    crossStyle,
    tickStyle,
    starStyle,
  };
};
