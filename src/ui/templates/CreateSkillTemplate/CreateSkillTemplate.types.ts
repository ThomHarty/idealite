import { ViewStyle } from "react-native";

import { IInputProps } from "../../atoms";

export interface ICreateSkillTemplateProps {
    onPressAdd: () => void;
    onPressBack: () => void;
    onPressCancel?: () => void;
    skill: IInputProps;
};

export interface CreateSkillTemplateStyles {
    container?: ViewStyle;
    inputContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
};
