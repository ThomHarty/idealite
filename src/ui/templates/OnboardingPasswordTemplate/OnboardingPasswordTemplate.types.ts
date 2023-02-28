import { ViewStyle } from "react-native";

import { IInputProps } from "../../atoms";

export interface IOnboardingPasswordTemplateProps {
    onPressNext: () => void;
    onPressBack: () => void;
    password: IInputProps;
    confirm: IInputProps;
};

export interface OnboardingPasswordTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    inputContainer?: ViewStyle;
};
