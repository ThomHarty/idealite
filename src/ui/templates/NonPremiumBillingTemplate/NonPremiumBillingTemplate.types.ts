import { ViewStyle } from "react-native";

export interface INonPremiumBillingTemplateProps {
    onPressBack: () => void;
    onPressSignUp: () => void;
};

export interface NonPremiumBillingTemplateStyles {
    container?: ViewStyle;
    buttonsContainer?: ViewStyle;
};
