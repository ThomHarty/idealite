import { ViewStyle } from "react-native";

import { IInputProps } from "../../atoms";

export interface IEditNameTemplateProps {
    onPressUpdate: () => void;
    onPressBack: () => void;
    onPressCancel: () => void;
    name: IInputProps;
};

export interface EditNameTemplateStyles {
    container?: ViewStyle;
    inputContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
};
