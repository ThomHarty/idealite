import { ViewStyle } from "react-native";

import { IDropdownProps, IInputProps } from "../../atoms";

export interface IEditTelephoneTemplateProps {
    onPressSave: () => void;
    onPressBack: () => void;
    onPressCancel: () => void;
    code: IDropdownProps;
    phone: IInputProps;
};

export interface EditTelephoneTemplateStyles {
    container?: ViewStyle;
    labelContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    codeContainer?: ViewStyle;
    phoneContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
};
