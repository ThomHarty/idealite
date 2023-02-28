import { Code, GetInputProps } from "../CodeInput.types";

interface Props {
    input: GetInputProps["input"];
    code: Code;
}

export const useCheckIsEditable = () => {
    const checkIsEditable = ({ input, code }: Props) => {
        let isEditable;
        switch(input) {
            case 1:
                isEditable = code[1] === "" && code[2] === "" && code[3] === "" && code[4] === "" && code[5] === "";
                break;
            case 2:
                isEditable = code[0] !== "" && code[2] === "" && code[3] === "" && code[4] === "" && code[5] === "";
                break;
            case 3:
                isEditable = code[0] !== "" && code[1] !== "" && code[3] === "" && code[4] === "" && code[5] === "";
                break;
            case 4:
                isEditable = code[0] !== "" && code[1] !== "" && code[2] !== "" && code[4] === "" && code[5] === "";
                break;
            case 5:
                isEditable = code[0] !== "" && code[1] !== "" && code[2] !== "" && code[3] !== "" && code[5] === "";
                break;
            case 6:
                isEditable = code[0] !== "" && code[1] !== "" && code[2] !== "" && code[3] !== "" && code[4] !== "";
                break;
            default:
                isEditable = true;
        };
    
        return isEditable;
    }

    return checkIsEditable;
};
