import { ViewStyle } from "react-native";

export interface ILandingTemplateProps {
    onPressGoogle: () => void;
    onPressApple: () => void;
    onPressFacebook: () => void;
    onPressCreateAccount: () => void;
    onPressSignIn: () => void;
};

export interface LandingTemplateStyles {
    container?: ViewStyle;
    topContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    iconContainer?: ViewStyle;
    bottomContainer?: ViewStyle;
    buttonContainer?: ViewStyle;
    textContainer?: ViewStyle;
};
