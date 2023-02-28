import { ViewStyle } from "react-native";
import { ISwitchNavItemProps } from "../../molecules";

export interface INotificationsTemplateProps {
    onPressBack: () => void;
    push: {
        insights: ISwitchNavItemProps;
        newMatches: ISwitchNavItemProps;
        newMessages: ISwitchNavItemProps;
        superLikes: ISwitchNavItemProps;
        recommendations: ISwitchNavItemProps;
    };
    email: {
        newMatches: ISwitchNavItemProps;
        newMessages: ISwitchNavItemProps;
        promotions: ISwitchNavItemProps;
    };
};

export interface NotificationsTemplateStyles {
    container?: ViewStyle;
    headingContainer?: ViewStyle;
};
