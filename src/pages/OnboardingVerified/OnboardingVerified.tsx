import React, {ReactElement} from 'react';

import {
  IOnboardingVerifiedTemplateProps,
  OnboardingVerifiedTemplate,
} from '../../ui/templates';

export const OnboardingVerified = ({navigation}: any): ReactElement => {
  const props: IOnboardingVerifiedTemplateProps = {
    onPressNext: () => navigation.navigate('EnableLocation'),
  };

  return <OnboardingVerifiedTemplate {...props} />;
};
