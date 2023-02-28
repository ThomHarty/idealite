import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {Icon, Logo} from '../../../theme/svg';

import {
  LinearBackground,
  Link,
  SocialSignInButton,
  Typography,
} from '../../atoms';
import {ILandingTemplateProps} from './LandingTemplate.types';
import {useStyles} from './useStyles';

export const LandingTemplate = ({
  onPressApple,
  onPressFacebook,
  onPressGoogle,
  onPressCreateAccount,
  onPressSignIn,
}: ILandingTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <View style={baseStyles.container}>
      <LinearBackground>
        <View style={baseStyles.topContainer}>
          <View style={baseStyles.svgContainer}>
            <View style={baseStyles.iconContainer}>
              <Icon />
            </View>
            <Logo />
          </View>
        </View>
        <View style={baseStyles.bottomContainer}>
          <View style={baseStyles.buttonContainer}>
            <SocialSignInButton variant="Google" onPress={onPressGoogle} />
          </View>
          <View style={baseStyles.buttonContainer}>
            <SocialSignInButton variant="Apple" onPress={onPressApple} />
          </View>
          <View style={baseStyles.buttonContainer}>
            <SocialSignInButton variant="Facebook" onPress={onPressFacebook} />
          </View>
          <View style={baseStyles.textContainer}>
            <Typography text="New user? " />
            <Link text="Create account" onPress={onPressCreateAccount} />
            <Typography text=" or " />
            <Link text="Sign in" onPress={onPressSignIn} />
          </View>
        </View>
      </LinearBackground>
    </View>
  );
};
