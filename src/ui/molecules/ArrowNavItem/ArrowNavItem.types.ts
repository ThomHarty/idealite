import {ViewStyle} from 'react-native';

export interface IArrowNavItemProps {
  text: string;
  onPress: () => void;
}

export interface ArrowNavItemStyles {
  container?: ViewStyle;
}
