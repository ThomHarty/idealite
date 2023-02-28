import React, {ReactElement, useState} from 'react';

import {
  IRecoverPasswordTemplateProps,
  RecoverPasswordTemplate,
} from '../../ui/templates';

export const RecoverPassword = (): ReactElement => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const props: IRecoverPasswordTemplateProps = {
    onPressBack: () => console.log('back pressed'),
    onPressNext: () => console.log('next pressed'),
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

  return <RecoverPasswordTemplate {...props} />;
};
