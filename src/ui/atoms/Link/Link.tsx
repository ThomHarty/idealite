import React, {memo, ReactElement, useState} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

import {ILinkProps} from './Link.types';
import {useDisabledColors, usePressedColors} from './animations';
import {baseStyles} from './Link.styles';

export const Link = memo(
  ({text, onPress, disabled = false}: ILinkProps): ReactElement => {
    const [pressed, setPressed] = useState(false);
    const {pressedColors} = usePressedColors({pressed});
    const {disabledColors} = useDisabledColors({disabled});

    const handlePressedIn = () => {
      setPressed(true);
    };

    const handlePressedOut = () => {
      setTimeout(() => setPressed(false), 100);
    };

    return (
      <Pressable
        onPress={onPress}
        onPressIn={handlePressedIn}
        onPressOut={handlePressedOut}
        disabled={disabled}
        style={baseStyles.wrapper}>
        <Animated.Text
          style={[
            baseStyles.text,
            !disabled && pressedColors.text,
            disabled && disabledColors.text,
          ]}>
          {text}
        </Animated.Text>
      </Pressable>
    );
  },
);
