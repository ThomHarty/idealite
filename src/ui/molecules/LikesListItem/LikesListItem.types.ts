import { ViewStyle } from "react-native";
import { ISvgSwitchProps } from "../../../shared/components";
import { IImageProps } from "../../atoms";

export interface ILikesListItemProps {
    avatar?: IImageProps["src"];
    id: number;
    name: string;
    title: string;
    svg: ISvgSwitchProps["svg"];
    onPress: (id: number) => void;
};

export interface LikesListItemStyles {
    container?: ViewStyle;
    avatarContainer?: ViewStyle;
    textContainer?: ViewStyle;
    svgContainer?: ViewStyle;
};
