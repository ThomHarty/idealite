import { ViewStyle } from "react-native";

import { IInputProps } from "../../atoms";

export interface IRecoverEmailTemplateProps {
    onPressNext: () => void;
    onPressBack: () => void;
    onPressForgot: () => void;
    email: IInputProps;
};

export interface RecoverEmailTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    linkContainer?: ViewStyle;
};
