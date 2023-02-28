import React, {ReactElement, useState} from 'react';

import {IEditSkillTemplateProps, EditSkillTemplate} from '../../ui/templates';

export const EditSkill = ({navigation}: any): ReactElement => {
  const [skill, setSkill] = useState('Software engineering');
  const props: IEditSkillTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressUpdate: () => console.log('update pressed'),
    onPressCancel: () => navigation.goBack(),
    skill: {
      label: 'Skill',
      value: skill,
      onChangeText: value => setSkill(value),
    },
  };

  return <EditSkillTemplate {...props} />;
};
