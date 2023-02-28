import { ViewStyle } from "react-native";

import { IImageProps } from "../../atoms";

export interface ISentNDAMessageProps {
    id: string;
    avatar?: IImageProps["src"];
    name: string;
    onPress: (id: string) => void; // @TODO: handle nda id
    readTime?: string;
};

export interface SentNDAMessageStyles {
    container?: ViewStyle;
    messageContainer?: ViewStyle;
    headingWrapper?: ViewStyle;
    messageWrapper?: ViewStyle;
    footerWrapper?: ViewStyle;
    avatarContainer?: ViewStyle;
    readContainer?: ViewStyle;
};
