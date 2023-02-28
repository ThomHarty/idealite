import React, {ReactElement} from 'react';
import {Image} from 'react-native';

import {
  IUserProfileTemplateProps,
  UserProfileTemplate,
} from '../../ui/templates';

// @ts-ignore
import DefaultImage from '../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export const EditProfile = ({navigation}: any): ReactElement => {
  const props: IUserProfileTemplateProps = {
    editMode: true,
    onPressBack: () => navigation.goBack(),
    profileHeader: {
      name: 'John Doe',
      title: 'CEO of Company LTD.',
      location: 'London, United Kingdom',
      joined: 'March 2022',
      avatar: DEFAULT_IMAGE,
    },
    bio: 'Lorem ipsum, etc.',
    showSwipeButtons: false,
    idea: {
      title: 'Career employment platform',
      body: 'Lorem ipsum',
    },
    skills: [
      {id: '12j4', title: 'Cyber security specialist'},
      {id: '9er9', title: 'Software engineering'},
    ],
    experience: [
      {
        id: 'h3ih',
        title: 'Cyber security specialist',
        company: 'Oracle',
        date: 'Mar 2021 - Present',
      },
    ],
    onPressEditProfile: () => navigation.navigate('EditAccount'),
    onPressEditBio: () => navigation.navigate('EditBio'),
    onPressEditIdea: () => navigation.navigate('EditIdea'),
    onPressEditSkill: id => navigation.navigate('EditSkill'),
    onPressEditExperience: id => navigation.navigate('EditExperience'),
    onPressAddSkill: () => navigation.navigate('AddSkill'),
    onPressAddExperience: () => navigation.navigate('AddExperience'),
  };

  return <UserProfileTemplate {...props} />;
};
