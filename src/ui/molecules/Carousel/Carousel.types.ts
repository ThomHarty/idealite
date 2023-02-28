import { ReactElement } from "react";
import { ViewStyle } from "react-native";

export interface ICarouselProps {
    current?: number;
    items: {
        content: ReactElement;
    }[];
    onActiveSlideChanged?: (slide: number) => void;
};

export interface CarouselStyles {
    contentContainer?: ViewStyle;
    circlesContainer?: ViewStyle;
    circleWrapper?: ViewStyle;
};
