import {Dispatch, RefObject} from 'react';
import {TextInput, TextInputKeyPressEventData, TextStyle} from 'react-native';
import {COLORS} from '../../../../theme';
import {Code, CodeIndex, Input, TextInputProps} from '../CodeInput.types';

export interface Props {
  ref: RefObject<TextInput>;
  codeIndex: CodeIndex;
  input: Input;
  code: Code;
  setCode: Dispatch<React.SetStateAction<Code>>;
  inputStyles?: TextStyle;
  isEditable: (input: Input) => boolean;
  handleBack: (input: Input) => void;
}

export const useGetInputProps = () => {
  const getInputProps = ({
    ref,
    codeIndex,
    input,
    code,
    setCode,
    isEditable,
    handleBack,
  }: Props): TextInputProps => {
    return {
      ref,
      value: code[codeIndex],
      maxLength: 1,
      onChangeText: (value: string) =>
        !isNaN(Number(value))
          ? setCode({...code, [codeIndex]: value})
          : undefined,
      keyboardType: 'numeric',
      accessibilityLabel: String(codeIndex),
      editable: isEditable(input),
      onKeyPress: ({
        nativeEvent,
      }: {
        nativeEvent: TextInputKeyPressEventData;
      }) => {
        nativeEvent.key === 'Backspace' && handleBack(input);
      },
      selectionColor: COLORS.PRIMARY,
    };
  };

  return getInputProps;
};
