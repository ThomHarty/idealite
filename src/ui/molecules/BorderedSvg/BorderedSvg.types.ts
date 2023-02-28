import { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { ISvgSwitchProps } from "../../../shared/components";

export interface IBorderedSvgProps {
    svg: ISvgSwitchProps["svg"];
    text?: string;
    size?: "small" | "large";
    activeBorderColor?: string;
    active: boolean;
};

export interface BorderedSvgStyles {
    container?: ViewStyle;
    svgContainer?: ViewStyle;
    textContainer?: ViewStyle;
};
