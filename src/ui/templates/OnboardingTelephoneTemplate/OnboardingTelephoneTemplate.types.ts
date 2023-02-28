import { ViewStyle } from "react-native";

import { IDropdownProps, IInputProps } from "../../atoms";

export interface IOnboardingTelephoneTemplateProps {
    onPressNext: () => void;
    onPressBack: () => void;
    code: IDropdownProps;
    phone: IInputProps;
};

export interface OnboardingTelephoneTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    codeContainer?: ViewStyle;
    phoneContainer?: ViewStyle;
};
