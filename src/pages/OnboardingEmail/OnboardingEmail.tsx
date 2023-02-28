import React, {ReactElement, useState} from 'react';

import {
  IOnboardingEmailTemplateProps,
  OnboardingEmailTemplate,
} from '../../ui/templates';

export const OnboardingEmail = ({navigation}: any): ReactElement => {
  const [email, setEmail] = useState('');
  const props: IOnboardingEmailTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('OnboardingDob'),
    email: {
      label: 'Email',
      value: email,
      onChangeText: value => setEmail(value),
    },
  };

  return <OnboardingEmailTemplate {...props} />;
};
