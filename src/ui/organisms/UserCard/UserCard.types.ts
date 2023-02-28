import { ViewStyle } from "react-native";
import { ISwipeUserInfoProps } from "../../molecules";

export interface IUserCardProps {
    swipeUserInfo: ISwipeUserInfoProps;
    blurb: string;
    tags: string[];
};

export interface UserCardStyles {
    container?: ViewStyle;
    topHalfContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    bottomHalfContainer?: ViewStyle;
    blurbContainer?: ViewStyle;
    tagsContainer?: ViewStyle;
    tag?: ViewStyle;
};
