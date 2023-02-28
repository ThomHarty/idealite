import {ViewStyle} from 'react-native';

export interface IRadioButtonProps {
  checked: boolean;
  disabled?: boolean;
  onPress: () => void;
}

export interface RadioButtonStyles {
  wrapper?: ViewStyle;
  container?: ViewStyle;
  center?: ViewStyle;
}
