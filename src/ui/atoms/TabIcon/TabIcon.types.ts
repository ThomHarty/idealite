import {TextStyle, ViewStyle} from 'react-native';
import {IIconProps} from '../../../shared/components';

export interface ITabIconProps {
  icon: IIconProps['name'];
  active?: boolean;
  unread?: boolean;
  isLikesSent?: boolean;
}

export interface TabIconStyles {
  iconContainer?: ViewStyle;
  icon?: TextStyle;
  unread?: ViewStyle;
  smallIconContainer?: TextStyle;
  smallIcon?: TextStyle;
}
