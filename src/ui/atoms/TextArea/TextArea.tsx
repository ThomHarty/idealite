import React, {memo, ReactElement} from 'react';
import {TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {COLORS} from '../../../theme';
import {ITextAreaProps} from './TextArea.types';
import {baseStyles} from './Textarea.styles';

export const TextArea = memo(
  ({
    placeholder,
    value,
    onChangeText,
    nativeProps,
    limit,
  }: ITextAreaProps): ReactElement => {
    return (
      <>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.GREY_DARK}
          value={value}
          onChangeText={onChangeText}
          maxLength={limit}
          {...nativeProps}
          multiline={true}
          numberOfLines={10}
          style={baseStyles.input}
        />
        {limit && (
          <View style={baseStyles.textContainer}>
            <Animated.Text style={baseStyles.text}>
              {`${value.length}/${limit}`}
            </Animated.Text>
          </View>
        )}
      </>
    );
  },
);
