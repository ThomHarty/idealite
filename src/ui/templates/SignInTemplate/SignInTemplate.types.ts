import { TextStyle, ViewStyle } from "react-native";
import { IInputProps } from "../../atoms";

export interface ISignInTemplateProps {
    onPressBack: () => void;
    email: IInputProps;
    password: IInputProps;
    onPressTrouble: () => void;
    onPressSignIn: () => void;
};

export interface SignInTemplateStyles {
    container?: ViewStyle;
    topContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    formContainer?: ViewStyle;
    inputsContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    linkContainer?: TextStyle;
    buttonContainer?: ViewStyle;
};
