import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface ITextAreaProps {
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  limit?: number;
  nativeProps?: TextInputProps;
}

export interface TextAreaStyles {
  input?: TextStyle;
  textContainer?: ViewStyle;
  text?: TextStyle;
}
