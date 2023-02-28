import React, {ReactElement} from 'react';

import {
  IRecoverSuccessTemplateProps,
  RecoverSuccessTemplate,
} from '../../ui/templates';

export const RecoverSuccess = (): ReactElement => {
  const props: IRecoverSuccessTemplateProps = {
    onPressNext: () => console.log('next pressed'),
  };

  return <RecoverSuccessTemplate {...props} />;
};
