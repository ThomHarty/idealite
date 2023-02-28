import { ViewStyle } from "react-native";

import { ISwipeCardProps } from "../../organisms";

export interface IFeedTemplateProps {
    cards: ISwipeCardProps[];
    firstTime?: boolean;
    onSwipedLeft: (name?: string) => void;
    onSwipedRight: (name?: string) => void;
};

export interface FeedTemplateStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    cardContainer?: ViewStyle;
    cardWrapper?: ViewStyle;
    buttonsContainer?: ViewStyle;
};
