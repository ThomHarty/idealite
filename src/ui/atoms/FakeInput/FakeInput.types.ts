import {TextStyle, ViewStyle} from 'react-native';

export interface IFakeInputProps {
  label?: string;
  text: string;
}

export interface FakeInputStyles {
  label?: TextStyle;
  textContainer?: ViewStyle;
  text?: TextStyle;
}
