import {TextStyle, ViewStyle} from 'react-native';

export interface ICheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export interface CheckboxStyles {
  wrapper?: ViewStyle;
  container?: ViewStyle;
  center?: ViewStyle;
  icon?: TextStyle;
}
