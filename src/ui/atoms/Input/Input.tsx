import React, {memo, ReactElement, useEffect, useState} from 'react';
import {TextInput, Pressable, View, Text} from 'react-native';

import {IInputProps} from './Input.types';
import {baseStyles} from './Input.styles';
import Animated from 'react-native-reanimated';
import {
  useDisabledColors,
  useInvalidColors,
  useLayoutStyles,
} from './animations';
import {Icon} from '../../../shared/components';

export const Input = memo(
  ({
    label,
    value,
    error,
    onChangeText,
    disabled = false,
    icon,
    iconOnPress,
    nativeProps,
  }: IInputProps): ReactElement => {
    const isNotEmpty = value.length > 0;
    const hasError = error ? true : false;
    const [focused, setFocused] = useState(false);
    const [currentError, setCurrentError] = useState('');
    const {layout} = useLayoutStyles({focused, isNotEmpty, hasError});
    const {disabledColors} = useDisabledColors({disabled});
    const {invalidColors} = useInvalidColors({invalid: error ? true : false});

    useEffect(() => {
      error
        ? setCurrentError(error)
        : setTimeout(() => setCurrentError(''), 275);
    }, [error]);

    return (
      <>
        {label && (
          <Animated.Text style={[baseStyles.labelText, layout.label]}>
            {label}
          </Animated.Text>
        )}
        <View style={baseStyles.container}>
          <Animated.View
            style={[
              baseStyles.inputWrapper,
              !disabled && invalidColors.input,
              disabled && disabledColors.input,
            ]}>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              style={[baseStyles.input]}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={undefined}
              editable={!disabled}
              {...nativeProps}
            />
          </Animated.View>
          {icon && (
            <View style={baseStyles.iconContainer}>
              {iconOnPress ? (
                <Pressable onPress={iconOnPress}>
                  <Icon
                    name={icon}
                    iconStyles={baseStyles.icon}
                    testID="input-icon"
                  />
                </Pressable>
              ) : (
                icon
              )}
            </View>
          )}
        </View>
        {currentError && (
          <Animated.View style={[baseStyles.errorContainer, layout.error]}>
            <Text style={baseStyles.errorText}>{currentError}</Text>
          </Animated.View>
        )}
      </>
    );
  },
);
