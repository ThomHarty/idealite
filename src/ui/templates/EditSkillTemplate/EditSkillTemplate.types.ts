import { ViewStyle } from "react-native";

import { IInputProps } from "../../atoms";

export interface IEditSkillTemplateProps {
    onPressUpdate: () => void;
    onPressBack: () => void;
    onPressCancel: () => void;
    skill: IInputProps;
};

export interface EditSkillTemplateStyles {
    container?: ViewStyle;
    inputContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
};
