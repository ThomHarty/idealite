import { ViewStyle, TextStyle } from "react-native";

export interface IChatInputBarProps {
    value: string;
    onChangeText: (value: string) => void;
    onPressPaperclip: () => void;
    onPressDocument: () => void;
    onPressSend: () => void;
    placeholder?: string;
};

export interface ChatInputBarStyles {
    container?: ViewStyle;
    iconContainer?: ViewStyle;
    input?: TextStyle;
    chatIconContainer?: ViewStyle;
};
