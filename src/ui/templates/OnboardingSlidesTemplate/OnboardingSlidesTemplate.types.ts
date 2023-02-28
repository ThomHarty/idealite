import { ViewStyle } from "react-native";

export interface IOnboardingSlidesTemplateProps {
    handleSkip: () => void;
    handleGetStarted: () => void;
    slidesText: {
        heading: string;
        text: string
    }[];
};

export interface OnboardingSlidesTemplateStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    carouselContainer?: ViewStyle;
    logoContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    textContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    ctaContainer?: ViewStyle;
    linkContainer?: ViewStyle;
};
