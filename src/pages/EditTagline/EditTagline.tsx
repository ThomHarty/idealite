import React, {ReactElement, useState} from 'react';

import {
  IEditTaglineTemplateProps,
  EditTaglineTemplate,
} from '../../ui/templates';

export const EditTagline = ({navigation}: any): ReactElement => {
  const [tagline, setTagline] = useState('Cyber security specialist');
  const props: IEditTaglineTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressUpdate: () => console.log('update pressed'),
    onPressCancel: () => navigation.goBack(),
    tagline: {
      label: 'Tagline',
      value: tagline,
      onChangeText: value => setTagline(value),
    },
  };

  return <EditTaglineTemplate {...props} />;
};
