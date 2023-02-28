import React, {ReactElement} from 'react';
import {Pressable, View} from 'react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

import {Icon} from '../../../shared/components';
import {Logo} from '../../../theme/svg';
import {useStyles} from './useStyles';
import {ILogoHeaderProps} from './LogoHeader.types';

export const LogoHeader = ({
  children,
  onPressBack,
}: ILogoHeaderProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <>
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
        <View style={baseStyles.logoContainer}>
          <Logo />
        </View>
        <View style={baseStyles.sideContainer} />
      </View>
      {children}
    </>
  );
};
