import { TextStyle, ViewStyle } from "react-native";

import { IIconProps } from "../../../shared/components";

export interface IIconButtonProps {
    size?: "small" | "large";
    iconColor?: string;
    disabled?: boolean;
    icon: IIconProps["name"];
    onPress: () => void;
    testID?: string;
};

export interface IconButtonStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    icon?: TextStyle;
};
