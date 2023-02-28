import React, {ReactElement} from 'react';

import {IAddSkillsTemplateProps, AddSkillsTemplate} from '../../ui/templates';

export const AddSkills = ({navigation}: any): ReactElement => {
  const props: IAddSkillsTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('ProfileSuccess'),
    onPressAdd: () => navigation.navigate('CreateSkill'),
    avatar: 'https://placeimg.com/640/480/people',
    skills: ['Cyber security specialist'],
    editOnPress: skill => console.log(skill),
  };

  return <AddSkillsTemplate {...props} />;
};
