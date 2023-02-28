import React, {ReactElement, useState} from 'react';
import {DropdownItem} from '../../ui/atoms';

import {
  IOnboardingTelephoneTemplateProps,
  OnboardingTelephoneTemplate,
} from '../../ui/templates';

export const OnboardingTelephone = ({navigation}: any): ReactElement => {
  const [code, setCode] = useState<DropdownItem | undefined>(undefined);
  const [phone, setPhone] = useState('');
  const props: IOnboardingTelephoneTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('OnboardingPassword'),
    code: {
      items: [
        {key: '+44', value: 'United Kingdon (+44)'},
        {key: '+355', value: 'Albania (+355)'},
        {key: '+33', value: 'France (+33)'},
        {key: '+91', value: 'India (+91)'},
        {key: '+1', value: 'United States (+1)'},
      ],
      selected: code,
      onItemSelected: item => setCode(item),
    },
    phone: {
      label: 'Phone',
      value: phone,
      onChangeText: value => setPhone(value),
    },
  };

  return <OnboardingTelephoneTemplate {...props} />;
};
