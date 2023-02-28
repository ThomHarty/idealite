import React, {ReactElement, useState} from 'react';

import {
  IOnboardingPasswordTemplateProps,
  OnboardingPasswordTemplate,
} from '../../ui/templates';

export const OnboardingPassword = ({navigation}: any): ReactElement => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const props: IOnboardingPasswordTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('OnboardingVerification'),
    password: {
      label: 'Password',
      value: password,
      onChangeText: value => setPassword(value),
    },
    confirm: {
      label: 'Confirm',
      value: confirm,
      onChangeText: value => setConfirm(value),
    },
  };

  return <OnboardingPasswordTemplate {...props} />;
};
