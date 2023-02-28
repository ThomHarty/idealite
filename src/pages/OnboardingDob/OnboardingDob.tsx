import React, {ReactElement, useState} from 'react';

import {
  IOnboardingDobTemplateProps,
  OnboardingDobTemplate,
} from '../../ui/templates';

export const OnboardingDob = ({navigation}: any): ReactElement => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const props: IOnboardingDobTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('OnboardingTelephone'),
    day: {
      label: 'DD',
      value: day,
      onChangeText: value => setDay(value),
    },
    month: {
      label: 'MM',
      value: month,
      onChangeText: value => setMonth(value),
    },
    year: {
      label: 'YYYY',
      value: year,
      onChangeText: value => setYear(value),
    },
  };

  return <OnboardingDobTemplate {...props} />;
};
