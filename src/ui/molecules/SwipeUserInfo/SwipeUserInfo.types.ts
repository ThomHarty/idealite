import { ViewStyle } from "react-native";
import { IImageProps } from "../../atoms";

export interface ISwipeUserInfoProps {
    avatar: IImageProps["src"];
    title: string;
    name: string;
    distance: string;
};

export interface SwipeUserInfoStyles {
    container?: ViewStyle;
    avatar?: ViewStyle;
    textRow?: ViewStyle;
    separator?: ViewStyle;
};
