import React, {ReactElement, useState} from 'react';

import {ICreateIdeaTemplateProps, CreateIdeaTemplate} from '../../ui/templates';

export const CreateIdea = ({navigation}: any): ReactElement => {
  const [name, setName] = useState('');
  const [idea, setIdea] = useState('');
  const props: ICreateIdeaTemplateProps = {
    onPressBack: () => navigation.goBack(),
    onPressNext: () => navigation.navigate('ProfileSuccess'),
    name: {
      label: 'Idea name',
      value: name,
      onChangeText: value => setName(value),
    },
    idea: {
      value: idea,
      onChangeText: value => setIdea(value),
      placeholder: 'Tell us about your idea...',
    },
    avatar: 'https://placeimg.com/640/480/people',
  };

  return <CreateIdeaTemplate {...props} />;
};
