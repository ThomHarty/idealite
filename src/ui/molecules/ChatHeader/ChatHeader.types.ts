import { TextStyle, ViewStyle } from "react-native";

export interface IChatHeaderProps {
    onPressBack: () => void;
    avatar: string;
    name: string;
};

export interface ChatHeaderStyles {
    container?: ViewStyle;
    headerContainer?: ViewStyle;
    chevronContainer?: ViewStyle;
    chevron?: TextStyle;
    avatarContainer?: ViewStyle;
};
