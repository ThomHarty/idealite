import { TextStyle, ViewStyle } from "react-native";

export interface IProfileSuccessTemplateProps {
    onPressNext: () => void;
};

export interface ProfileSuccessTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    iconContainer?: ViewStyle;
    icon?: TextStyle;
    textContainer?: TextStyle;
    infoContainer?: TextStyle;
};
