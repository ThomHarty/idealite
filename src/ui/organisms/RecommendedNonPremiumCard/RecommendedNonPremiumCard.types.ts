import { TextStyle, ViewStyle } from "react-native";

export interface IRecommendedNonPremiumCardProps {
    onPressJoinNow: () => void;
};

export interface RecommendedNonPremiumCardStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    iconContainer?: ViewStyle;
    headingContainer?: TextStyle;
    subHeadingContainer?: TextStyle;
    infoContainer?: TextStyle;
    bottomContainer?: ViewStyle;
    buttonContainer?: ViewStyle;
    linkContainer?: ViewStyle;
};
