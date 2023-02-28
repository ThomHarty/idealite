import {ViewStyle} from 'react-native';

import {IImageProps} from '../../atoms';

export interface IReceivedNDAMessageProps {
  avatar?: IImageProps['src'];
  id: string;
  name: string;
  onPress: (id: string) => void; // @TODO: handle nda id
  readTime?: string;
}

export interface ReceivedNDAMessageStyles {
  container?: ViewStyle;
  messageContainer?: ViewStyle;
  headingWrapper?: ViewStyle;
  messageWrapper?: ViewStyle;
  footerWrapper?: ViewStyle;
  avatarContainer?: ViewStyle;
}
