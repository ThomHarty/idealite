import { ReactElement } from "react";
import { ViewStyle, TextStyle } from "react-native";

export interface ITextHeaderProps {
    children?: ReactElement | ReactElement[];
    onPressBack?: () => void;
    text: string;
};

export interface TextHeaderStyles {
    container?: ViewStyle;
    chevronContainer?: ViewStyle;
    chevron?: TextStyle;
    textContainer?: ViewStyle;
    sideContainer?: ViewStyle;
};
