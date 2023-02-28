import {TextStyle, ViewStyle} from 'react-native';
import {IAvatarStatusProps} from '../../molecules';

export interface IMessagesListItemProps {
  avatarStatus: IAvatarStatusProps;
  id: number;
  name: string;
  title: string;
  message: string;
  onPress: (id: number) => void;
  unread?: boolean;
  superlike?: boolean;
}

export interface MessagesListItemStyles {
  container?: ViewStyle;
  avatarContainer?: ViewStyle;
  textContainer?: ViewStyle;
  nameContainer?: ViewStyle;
  icon?: TextStyle;
  titleContainer?: ViewStyle;
}
