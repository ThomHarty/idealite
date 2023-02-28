import React, {ReactElement, useCallback, useState} from 'react';

import {IUserRoleTemplateProps, UserRoleTemplate} from '../../ui/templates';

export const UserRole = ({navigation}: any): ReactElement => {
  const [selected, setSelected] = useState('');

  const handleNext = useCallback(() => {
    if (selected === 'idea') {
      navigation.navigate('CreateIdea');
    } else {
      navigation.navigate('AddSkillsPrompt');
    }
  }, [selected]);

  const props: IUserRoleTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: handleNext,
    avatar: 'https://placeimg.com/640/480/people',
    onSelected: value => setSelected(value),
  };

  return <UserRoleTemplate {...props} />;
};
