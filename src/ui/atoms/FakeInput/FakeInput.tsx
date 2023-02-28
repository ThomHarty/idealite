import React, {memo, ReactElement} from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {IFakeInputProps} from './FakeInput.types';
import {baseStyles} from './FakeInput.styles';

export const FakeInput = memo(
  ({label, text}: IFakeInputProps): ReactElement => {
    return (
      <View>
        {label && (
          <Animated.Text style={[baseStyles.label]}>{label}</Animated.Text>
        )}
        <Animated.View style={baseStyles.textContainer}>
          <Text style={baseStyles.text}>{text}</Text>
        </Animated.View>
      </View>
    );
  },
);
