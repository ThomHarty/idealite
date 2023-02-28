import React, {ReactElement} from 'react';
import {Pressable, SafeAreaView, View} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import {Icon} from '../../../shared/components';
import {Typography} from '../../atoms';
import {baseStyles} from './TextHeader.styles';
import {ITextHeaderProps} from './TextHeader.types';

export const TextHeader = ({
  children,
  onPressBack,
  text,
}: ITextHeaderProps): ReactElement => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={baseStyles.container}>
        <View style={baseStyles.sideContainer}>
          {onPressBack && (
            <Animated.View
              entering={FadeIn}
              exiting={FadeOut}
              style={baseStyles.chevronContainer}>
              <Pressable onPress={onPressBack}>
                <Icon
                  name="left-chevron"
                  iconStyles={baseStyles.chevron}
                  testID="chevron"
                />
              </Pressable>
            </Animated.View>
          )}
        </View>
        <View style={baseStyles.textContainer}>
          <Typography text={text} size="cta" />
        </View>
        <View style={baseStyles.sideContainer} />
      </View>
      {children}
    </SafeAreaView>
  );
};
