import { TextStyle, ViewStyle } from "react-native";

export interface IEnableLocationTemplateProps {
    onPressWhy: () => void;
    onPressAllow: () => void;
    onPressBack: () => void;
};

export interface EnableLocationTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    headingContainer?: TextStyle;
    infoContainer?: TextStyle;
    linkContainer?: TextStyle;
};
