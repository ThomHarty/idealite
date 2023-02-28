import React, {ReactElement} from 'react';

import {
  IAccountSettingsTemplateProps,
  AccountSettingsTemplate,
} from '../../ui/templates';

export const AccountSettings = ({navigation}: any): ReactElement => {
  const props: IAccountSettingsTemplateProps = {
    onPressBack: () => navigation.goBack(),
    avatar: 'https://placeimg.com/640/480/people',
    name: 'John Doe',
    email: 'johndoe@email.com',
    telephone: {
      code: '+44',
      number: '7*** **7987',
    },
    onPressTelephone: () => console.log('telephone pressed'),
    dob: {day: '22', month: '06', year: '1992'},
    onPressDob: () => console.log('dob pressed'),
    onPressChangePassword: () => console.log('change password pressed'),
    onPressDeleteAccount: () => console.log('delete account pressed'),
  };

  return <AccountSettingsTemplate {...props} />;
};
