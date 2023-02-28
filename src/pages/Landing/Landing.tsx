import React, {ReactElement} from 'react';

import {ILandingTemplateProps, LandingTemplate} from '../../ui/templates';

export const Landing = ({navigation}: any): ReactElement => {
  const onPress = () => console.log('pressed');
  const props: ILandingTemplateProps = {
    onPressGoogle: onPress,
    onPressApple: onPress,
    onPressFacebook: onPress,
    onPressCreateAccount: () => navigation.navigate('OnboardingName'),
    onPressSignIn: () => navigation.navigate('SignIn'),
  };

  return <LandingTemplate {...props} />;
};
