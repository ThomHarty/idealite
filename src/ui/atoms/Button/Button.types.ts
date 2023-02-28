import { TextStyle, ViewStyle } from "react-native";
import { IIconProps } from "../../../shared/components";

export type Variant = "primary" | "secondary" | "tertiary";

export type ButtonVariant = {
    variant?: Variant;
}

export interface IButtonProps extends ButtonVariant {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    icon?: IIconProps["name"];
}

export type ButtonStyles = {
    button?: ViewStyle;
    text?: TextStyle;
    iconContainer?: ViewStyle;
    icon?: TextStyle;
}
