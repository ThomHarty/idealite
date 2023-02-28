import React, {ReactElement, useState} from 'react';
import {ISvgSwitchProps} from '../../shared/components';

import {
  IEditProfileTemplateProps,
  EditProfileTemplate,
} from '../../ui/templates';

export const EditAccountProfile = ({navigation}: any): ReactElement => {
  const [swipeIcon, setSwipeIcon] = useState<ISvgSwitchProps['svg']>('arrow');
  const props: IEditProfileTemplateProps = {
    onPressSave: () => console.log('save pressed'),
    onPressCancel: () => navigation.goBack(),
    onPressUpload: () => console.log('upload pressed'),
    name: 'John Doe',
    onPressName: () => navigation.navigate('EditName'),
    tagline: 'Oracle',
    onPressTagline: () => navigation.navigate('EditTagline'),
    location: 'London, United Kingdom',
    onPressLocation: () => navigation.navigate('EditLocation'),
    swipeIcon,
    onPressSwipeIcon: icon => setSwipeIcon(icon),
  };

  return <EditProfileTemplate {...props} />;
};
