import React, {ReactElement, useState} from 'react';
import {EditBioTemplate, IEditBioTemplateProps} from '../../ui/templates';

export const EditBio = ({navigation}: any): ReactElement => {
  const [value, setValue] = useState('');
  const props: IEditBioTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressUpdate: () => console.log('update pressed'),
    onPressCancel: () => navigation.goBack(),
    name: 'John Doe',
    textArea: {
      value,
      onChangeText: value => setValue(value),
    },
  };

  return <EditBioTemplate {...props} />;
};
