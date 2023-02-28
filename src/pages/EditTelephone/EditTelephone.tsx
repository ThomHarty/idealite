import React, {ReactElement, useState} from 'react';

import {DropdownItem} from '../../ui/atoms';
import {
  IEditTelephoneTemplateProps,
  EditTelephoneTemplate,
} from '../../ui/templates';

export const EditTelephone = (): ReactElement => {
  const [code, setCode] = useState<DropdownItem | undefined>({
    key: '+44',
    value: 'United Kingdon (+44)',
  });
  const [phone, setPhone] = useState('7754459450');
  const props: IEditTelephoneTemplateProps = {
    onPressBack: () => () => console.log('back pressed'),
    onPressSave: () => () => console.log('save pressed'),
    onPressCancel: () => console.log('cancel pressed'),
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
      label: ' ',
      value: phone,
      onChangeText: value => setPhone(value),
    },
  };

  return <EditTelephoneTemplate {...props} />;
};
