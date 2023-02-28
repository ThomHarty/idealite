import React, {ReactElement, useEffect} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';

import {ISingleSwipeCardProps} from './SingleSwipeCard.types';
import {useStyles} from './useStyles';

export const SingleSwipeCard = ({
  children,
  onSwiped,
  opacity = 1,
  visible = false,
}: ISingleSwipeCardProps): ReactElement => {
  const baseStyles = useStyles(opacity);
  const {height, width} = useWindowDimensions();
  const SNAP_POINTS = [-width - 100, 0, width + 100];

  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const angle = useSharedValue(0);
  const containerY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onChange(({translationX, translationY}) => {
      x.value = translationX;
      y.value = translationY;
      angle.value = translationX / 20;
    })
    .onEnd(({velocityX}) => {
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS);
      x.value = withSpring(dest, {velocity: velocityX});
      y.value = withSpring(0, {velocity: velocityX});
      angle.value = withTiming(0, {duration: 100});
      if (dest !== 0) {
        runOnJS(onSwiped)();
      }
    });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: x.value},
        {translateY: y.value},
        {rotateZ: `${angle.value}deg`},
      ],
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: containerY.value}],
    };
  });

  useEffect(() => {
    if (visible) {
      containerY.value = withTiming(0, {duration: 250});
    } else {
      containerY.value = withTiming(-height - 100, {duration: 450});
    }
  }, [visible]);

  return (
    <Animated.View style={[baseStyles.container, containerStyle]}>
      <GestureDetector gesture={gesture}>
        <View style={baseStyles.cardsContainer}>
          <Animated.View style={[baseStyles.card, cardStyle]}>
            {children}
          </Animated.View>
        </View>
      </GestureDetector>
    </Animated.View>
  );
};
