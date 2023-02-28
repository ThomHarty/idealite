import React, {memo, ReactElement} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {COLORS} from '../../../theme';
import {Apple, Facebook, Google} from '../../../theme/svg';
import {Typography} from '../Typography/Typography';
import {ISocialSignInButtonProps} from './SocialSignInButton.types';
import {useStyles} from './useStyles';

export const SocialSignInButton = memo(
  ({variant, onPress}: ISocialSignInButtonProps): ReactElement => {
    const baseStyles = useStyles(variant);

    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={baseStyles.container}
        onPress={onPress}>
        <View style={baseStyles.svgContainer}>
          {variant === 'Apple' && <Apple />}
          {variant === 'Facebook' && <Facebook />}
          {variant === 'Google' && <Google />}
        </View>
        <Typography
          text={`Sign in with ${variant}`}
          color={variant === 'Google' ? COLORS.BLACK : COLORS.WHITE}
          size="cta"
        />
      </TouchableOpacity>
    );
  },
);
