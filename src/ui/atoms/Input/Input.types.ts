import {TextInputProps, TextStyle, ViewStyle} from 'react-native';
import {IIconProps} from '../../../shared/components';

export interface InputStyles {
  container?: ViewStyle;
  inputWrapper?: ViewStyle;
  input?: TextStyle;
  iconContainer?: ViewStyle;
  labelContainer?: ViewStyle;
  labelText?: TextStyle;
  errorContainer?: ViewStyle;
  errorText?: TextStyle;
  icon?: TextStyle;
}

export interface IInputProps {
  label?: string;
  value: string;
  error?: string;
  onChangeText: (value: string) => void;
  icon?: IIconProps['name'];
  iconOnPress?: () => void;
  disabled?: boolean;
  nativeProps?: TextInputProps;
}
