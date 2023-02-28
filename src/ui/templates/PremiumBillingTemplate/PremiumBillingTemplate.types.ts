import { TextStyle, ViewStyle } from "react-native";

export interface IPremiumBillingTemplateProps {
    onPressBack: () => void;
    renewalDate: string;
};

export interface PremiumBillingTemplateStyles {
    container?: ViewStyle;
    // top
    premiumContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    svg?: ViewStyle;
    iconContainer?: ViewStyle;
    icon?: TextStyle;
    premiumHeadingContainer?: ViewStyle;
    premiumInfoContainer?: ViewStyle;
    // list
    premiumListContainer?: ViewStyle;
    listHeadingContainer?: ViewStyle;
    listItemContainer?: ViewStyle;
    listIconContainer?: ViewStyle;
    tick?: TextStyle;
};
