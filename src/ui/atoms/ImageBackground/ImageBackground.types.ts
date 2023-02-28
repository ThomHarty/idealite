import { ReactElement } from "react";
import { ViewStyle } from "react-native";

export interface IImageBackgroundProps {
    src: string;
    containerStyles: ViewStyle;
    children: ReactElement;
}
