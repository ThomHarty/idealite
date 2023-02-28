import React, {ReactElement, useState} from 'react';

import {IEditNameTemplateProps, EditNameTemplate} from '../../ui/templates';

export const EditName = ({navigation}: any): ReactElement => {
  const [name, setName] = useState('John Doe');
  const props: IEditNameTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressUpdate: () => console.log('update pressed'),
    onPressCancel: () => navigation.goBack(),
    name: {
      label: 'Name',
      value: name,
      onChangeText: value => setName(value),
    },
  };

  return <EditNameTemplate {...props} />;
};
