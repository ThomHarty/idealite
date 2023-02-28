import {TextStyle, ViewStyle} from 'react-native';

export type Variant = 'primary' | 'secondary' | 'tertiary';

export interface IChipProps {
  variant?: Variant;
  text: string;
}

export interface ChipStyles {
  container?: ViewStyle;
  text?: TextStyle;
}
