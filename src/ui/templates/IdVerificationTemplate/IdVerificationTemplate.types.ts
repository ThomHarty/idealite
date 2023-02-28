import { TextStyle, ViewStyle } from "react-native";

export interface IIdVerificationTemplateProps {
    onPressBack: () => void;
    onPressContinue: () => void;
};

export interface IdVerificationTemplateStyles {
    container?: ViewStyle;
    buttonsContainer?: ViewStyle;
    contentContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    headingContainer?: TextStyle;
    infoContainer?: TextStyle;
};
