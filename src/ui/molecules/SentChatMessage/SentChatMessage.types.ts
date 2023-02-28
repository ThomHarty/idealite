import {ViewStyle} from 'react-native';

import {IImageProps} from '../../atoms';

export interface ISentChatMessageProps {
  avatar?: IImageProps['src'];
  message: string;
  readTime?: string;
}

export interface SentChatMessageStyles {
  container?: ViewStyle;
  messageContainer?: ViewStyle;
  avatarContainer?: ViewStyle;
  readContainer?: ViewStyle;
}
