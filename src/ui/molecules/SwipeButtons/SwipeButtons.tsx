import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';

import {ISwipeButtonsProps} from './SwipeButtons.types';
import {baseStyles} from './SwipeButtons.styles';
import {FlatIconButton} from '../../atoms';
import {COLORS} from '../../../theme';
import Animated from 'react-native-reanimated';
import {useAnimations} from './useAnimations';

export const SwipeButtons = memo(
  ({
    onPressRewind,
    onPressCross,
    onPressTick,
    onPressStar,
    disabled,
    isSwipingLeft,
    isSwipingRight,
  }: ISwipeButtonsProps): ReactElement => {
    const {rewindStyle, crossStyle, tickStyle, starStyle} = useAnimations({
      disabled,
      isSwipingLeft,
      isSwipingRight,
    });

    return (
      <View style={baseStyles.container}>
        <Animated.View style={[baseStyles.smallIconContainer, rewindStyle]}>
          <FlatIconButton
            icon="rewind"
            onPress={onPressRewind}
            diameter={46}
            backgroundColor={COLORS.WHITE}
            iconColor={COLORS.WARNING}
            testID="rewind"
            disabled={disabled}
          />
        </Animated.View>
        <Animated.View style={[baseStyles.largeIconContainer, crossStyle]}>
          <FlatIconButton
            icon="cross"
            onPress={onPressCross}
            diameter={64}
            backgroundColor={COLORS.WHITE}
            iconColor={COLORS.DANGER}
            testID="cross"
            disabled={disabled}
          />
        </Animated.View>
        <Animated.View style={[baseStyles.largeIconContainer, tickStyle]}>
          <FlatIconButton
            icon="tick"
            onPress={onPressTick}
            diameter={64}
            backgroundColor={COLORS.WHITE}
            iconColor={COLORS.SUCCESS}
            testID="tick"
            disabled={disabled}
          />
        </Animated.View>
        <Animated.View style={[baseStyles.smallIconContainer, starStyle]}>
          <FlatIconButton
            icon="star"
            onPress={onPressStar}
            diameter={46}
            backgroundColor={COLORS.WHITE}
            iconColor={COLORS.ACCENT_ONE}
            testID="star"
            disabled={disabled}
          />
        </Animated.View>
      </View>
    );
  },
);
