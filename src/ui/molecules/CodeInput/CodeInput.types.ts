import {RefObject} from 'react';
import {
  TextInput,
  TextStyle,
  TextInputKeyPressEventData,
  ViewStyle,
} from 'react-native';

export interface ICodeInputProps {
  error?: string;
  correct?: boolean;
  onEndCodeInput: (code: string) => void;
}

export interface CodeInputStyles {
  container?: ViewStyle;
  inputWrapper?: ViewStyle;
  input?: TextStyle;
  errorContainer?: ViewStyle;
  errorText?: TextStyle;
}

export type Code = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

export type CodeIndex = keyof Code;

export type Input = 1 | 2 | 3 | 4 | 5 | 6;

export interface GetInputProps {
  ref: RefObject<TextInput>;
  codeIndex: CodeIndex;
  input: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextInputProps {
  ref: RefObject<TextInput>;
  value: string;
  maxLength: number;
  onChangeText: (value: string) => void;
  keyboardType: 'numeric';
  accessibilityLabel: string;
  editable: boolean;
  onKeyPress: ({
    nativeEvent,
  }: {
    nativeEvent: TextInputKeyPressEventData;
  }) => void;
  selectionColor: string;
}
