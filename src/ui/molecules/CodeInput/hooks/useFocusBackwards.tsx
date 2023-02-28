import {GetInputProps} from '../CodeInput.types';
import {InputRefs} from './useInputRefs';

interface Props {
  input: GetInputProps['input'];
  refs: ReturnType<InputRefs>;
}

export const useFocusBackwards = () => {
  const focusBackwards = ({input, refs}: Props) => {
    if (input === 6) {
      refs.inputRef5.current?.focus();
    } else if (input === 5) {
      refs.inputRef4.current?.focus();
    } else if (input === 4) {
      refs.inputRef3.current?.focus();
    } else if (input === 3) {
      refs.inputRef2.current?.focus();
    } else if (input === 2) {
      refs.inputRef1.current?.focus();
    }
  };

  return focusBackwards;
};
