import React, {ReactElement, useState} from 'react';

import {
  IOnboardingNameTemplateProps,
  OnboardingNameTemplate,
} from '../../ui/templates';

export const OnboardingName = ({navigation}: any): ReactElement => {
  const [name, setName] = useState('');
  const props: IOnboardingNameTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('OnboardingEmail'),
    name: {
      label: 'Name',
      value: name,
      onChangeText: value => setName(value),
    },
  };

  return <OnboardingNameTemplate {...props} />;
};
