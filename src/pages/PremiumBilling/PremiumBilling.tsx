import React, {ReactElement} from 'react';

import {
  IPremiumBillingTemplateProps,
  PremiumBillingTemplate,
} from '../../ui/templates';

export const PremiumBilling = ({navigation}: any): ReactElement => {
  const props: IPremiumBillingTemplateProps = {
    onPressBack: () => navigation.goBack(),
    renewalDate: '05/09/22',
  };

  return <PremiumBillingTemplate {...props} />;
};
