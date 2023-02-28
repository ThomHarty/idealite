import {TextStyle, ViewStyle} from 'react-native';
import {IImageProps} from '../../atoms';

export interface IProfileHeaderProps {
  avatar?: IImageProps['src'];
  name: string;
  title: string;
  location: string;
  joined: string;
}

export interface ProfileHeaderStyles {
  container?: ViewStyle;
  gradientContainer?: ViewStyle;
  avatarContainer?: ViewStyle;
  bodyContainer?: ViewStyle;
  nameContainer?: ViewStyle;
  titleContainer?: ViewStyle;
  locationContainer?: ViewStyle;
  joinedContainer?: ViewStyle;
  icon?: TextStyle;
  iconSize?: TextStyle;
}
