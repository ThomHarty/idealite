import React, {ReactElement, useState} from 'react';

import {
  FeedFiltersTemplate,
  IFeedFiltersTemplateProps,
} from '../../ui/templates';

export const FeedFilters = ({navigation}: any): ReactElement => {
  const [startValue, setStartValue] = useState(10);

  const props: IFeedFiltersTemplateProps = {
    onPressBack: () => navigation.goBack(),
    filterChoice: {onTabChanged: tab => console.log('tabs changed: ', tab)},
    tags: [
      'Design',
      'Admin',
      'Law',
      'Marketing',
      'Engineering',
      'Photography',
      'HR',
      'Web Development',
      'Apps',
      'Social',
      'SEO',
    ],
    onPressSeeMore: () => console.log('see more pressed'),
    slide: {
      handleOnChange: value => setStartValue(value),
      startValue,
    },
    location: 'London, United Kingdom (your location)',
    onPressApply: () => console.log('apply pressed'),
    onPressReset: () => console.log('reset pressed'),
  };

  return <FeedFiltersTemplate {...props} />;
};
