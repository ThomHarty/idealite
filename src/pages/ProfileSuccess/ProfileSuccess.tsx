import React, {ReactElement} from 'react';

import {
  IProfileSuccessTemplateProps,
  ProfileSuccessTemplate,
} from '../../ui/templates';

export const ProfileSuccess = (): ReactElement => {
  const props: IProfileSuccessTemplateProps = {
    onPressNext: () => console.log('next pressed'),
  };

  return <ProfileSuccessTemplate {...props} />;
};
