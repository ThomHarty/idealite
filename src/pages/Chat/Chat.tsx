import React, {ReactElement, useState} from 'react';
import {ChatTemplate, IChatTemplateProps} from '../../ui/templates';

import {messages} from './fixtures';

export const Chat = ({navigation}: any): ReactElement => {
  const [value, setValue] = useState('');

  // map db from_user_id to authedId to set IMessage.delivery

  const props: IChatTemplateProps = {
    chatInputBar: {
      value,
      onChangeText: value => setValue(value),
      onPressDocument: () => console.log('document pressed'),
      onPressPaperclip: () => console.log('paperclip pressed'),
      onPressSend: () => console.log('send pressed with message: ', value),
      placeholder: 'Aa',
    },
    chatHeader: {
      onPressBack: () => navigation.goBack(),
      avatar: 'https://placeimg.com/640/480/people',
      name: 'John Doe',
    },
    messages,
    // @TODO: handle different NDA types with NDASwitch component - (ndaType: "" | "" ...) => {};
    onPressNDAMessage: () => navigation.navigate('DownloadNDA'),
  };

  console.log('chat input value: ', value);

  return <ChatTemplate {...props} />;
};
