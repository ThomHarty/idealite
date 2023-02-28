import React, {ReactElement, useState} from 'react';

import {
  ICreateSkillTemplateProps,
  CreateSkillTemplate,
} from '../../ui/templates';

export const CreateSkill = ({navigation}: any): ReactElement => {
  const [skill, setSkill] = useState('');
  const props: ICreateSkillTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressAdd: () => navigation.goBack(),
    skill: {
      label: 'Skill',
      value: skill,
      onChangeText: value => setSkill(value),
    },
  };

  return <CreateSkillTemplate {...props} />;
};
