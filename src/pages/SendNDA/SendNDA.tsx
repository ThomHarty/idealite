import React, {ReactElement} from 'react';
import {ISendNDATemplateProps, SendNDATemplate} from '../../ui/templates';

export const SendNDA = (): ReactElement => {
  const props: ISendNDATemplateProps = {
    onPressBack: () => console.log('back pressed'),
    onPressSend: () => console.log('send pressed'),
    ndaText: 'Lorem ipsum',
  };

  return <SendNDATemplate {...props} />;
};
