import { Code, ICodeInputProps } from "../CodeInput.types";
import { InputRefs } from "./useInputRefs";

interface Props {
    refs: ReturnType<InputRefs>;
    code: Code;
    onEndCodeInput: ICodeInputProps["onEndCodeInput"];
}

export const useFocusForwards = () => {
    const focusForwards = ({ refs, code, onEndCodeInput }: Props) => {
        if (code[5] !== "") {
            const fullCode = `${code[0]}${code[1]}${code[2]}${code[3]}${code[4]}${code[5]}`;
            onEndCodeInput(fullCode);
        } else if (code[4] !== "") {
            refs.inputRef6.current?.focus();
        } else if (code[3] !== "") {
            refs.inputRef5.current?.focus();
        } else if (code[2] !== "") {
            refs.inputRef4.current?.focus();
        } else if (code[1] !== "") {
            refs.inputRef3.current?.focus();
        } else if (code[0] !== "") {
            refs.inputRef2.current?.focus();
        } else {
            refs.inputRef1.current?.focus();
        }
    }

    return focusForwards;
};
