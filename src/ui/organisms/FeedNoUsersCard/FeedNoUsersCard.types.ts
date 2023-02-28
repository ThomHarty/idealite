import { TextStyle, ViewStyle } from "react-native";

export interface IFeedNoUsersCardProps {
    onPressContinue: () => void;
    onPressFilter: () => void;
};

export interface FeedNoUsersCardStyles {
    container?: ViewStyle;
    topIconContainer?: ViewStyle;
    iconContainer?: ViewStyle;
    icon?: TextStyle;
    filterIcon?: TextStyle;
    headingContainer?: TextStyle;
    infoContainer?: TextStyle;
    bottomContainer?: ViewStyle;
    buttonContainer?: ViewStyle;
};
