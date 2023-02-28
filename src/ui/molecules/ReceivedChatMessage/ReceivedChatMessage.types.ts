import { ViewStyle } from "react-native";

import { IImageProps } from "../../atoms";

export interface IReceivedChatMessageProps {
    avatar?: IImageProps["src"];
    message: string;
    readTime?: string;
};

export interface ReceivedChatMessageStyles {
    container?: ViewStyle;
    messageContainer?: ViewStyle;
    avatarContainer?: ViewStyle;
};
