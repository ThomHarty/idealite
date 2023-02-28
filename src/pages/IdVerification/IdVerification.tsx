import React, {ReactElement} from 'react';

import {
  IIdVerificationTemplateProps,
  IdVerificationTemplate,
} from '../../ui/templates';

export const IdVerification = (): ReactElement => {
  const props: IIdVerificationTemplateProps = {
    onPressBack: () => console.log('back pressed'),
    onPressContinue: () => console.log('continue pressed'),
  };

  return <IdVerificationTemplate {...props} />;
};
