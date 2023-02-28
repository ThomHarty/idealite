import {ViewStyle} from 'react-native';

export interface ISwitchProps {
  checked: boolean;
  disabled?: boolean;
  onPress: () => void;
  testID?: string;
}

export interface SwitchStyles {
  wrapper?: ViewStyle;
  container?: ViewStyle;
  center?: ViewStyle;
}
