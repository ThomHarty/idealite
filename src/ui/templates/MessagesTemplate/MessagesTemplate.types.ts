import { TextStyle, ViewStyle } from "react-native";
import { IMessagesListItemProps } from "../../organisms";

export interface IMessagesTemplateProps {
    conversations: Omit<IMessagesListItemProps, "onPress">[];
    onPressConversation: (id: number) => void;
    isPremium?: boolean;
};

export interface MessagesTemplateStyles {
    container?: ViewStyle;
    conversationsContainer?: ViewStyle;
    ctaContainer?: ViewStyle;
    ctaIconContainer?: ViewStyle;
    icon?: TextStyle;
    ctaTextContainer?: ViewStyle;
    noActivityContainer?: ViewStyle;
    iconContainer?: ViewStyle;
    noActivityIcon?: TextStyle;
    iconTextContainer?: TextStyle;
};
