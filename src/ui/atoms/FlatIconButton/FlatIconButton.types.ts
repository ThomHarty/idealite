import { TextStyle, ViewStyle } from "react-native";

import { IIconProps } from "../../../shared/components";

export interface IFlatIconButtonProps {
    iconColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    disabled?: boolean;
    icon: IIconProps["name"];
    onPress: () => void;
    diameter?: number;
    iconSize?: number;
    testID?: string;
};

export interface FlatIconButtonStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    icon?: TextStyle;
};
