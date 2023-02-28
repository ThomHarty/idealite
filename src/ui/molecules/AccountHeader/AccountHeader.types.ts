import {TextStyle, ViewStyle} from 'react-native';
import {IAvatarStatusProps} from '../AvatarStatus/AvatarStatus.types';

export interface IAccountHeaderProps {
  avatarStatus: IAvatarStatusProps;
  name: string;
  title: string;
  location: string;
  joined: string;
  onPressEdit: () => void;
  onPressSeeMore: () => void;
}

export interface AccountHeaderStyles {
  container?: ViewStyle;
  topContainer?: ViewStyle;
  topLeftContainer?: ViewStyle;
  nameContainer?: ViewStyle;
  titleContainer?: ViewStyle;
  textContainer?: ViewStyle;
  icon?: TextStyle;
  iconSize?: TextStyle;
  moreIcon?: TextStyle;
  moreIconSize?: TextStyle;
}
