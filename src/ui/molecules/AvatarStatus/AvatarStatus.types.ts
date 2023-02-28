import {ViewStyle} from 'react-native';
import {IImageProps, IOnlineCircleProps} from '../../atoms';

export interface IAvatarStatusProps {
  avatar?: IImageProps['src'];
  online?: IOnlineCircleProps['online'];
  testID?: string;
}

export interface AvatarStatusStyles {
  container?: ViewStyle;
  statusContainer?: ViewStyle;
}
