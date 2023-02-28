import { useWindowDimensions } from "react-native";

import { CarouselStyles } from "./Carousel.types";

export const useStyles = (): CarouselStyles => {
    const { width } = useWindowDimensions();
    
    const baseStyles: CarouselStyles = {
        contentContainer: {
            width,
        },
        circlesContainer: {
            width,
            flexDirection: "row",
            justifyContent: "center",
        },
        circleWrapper: {
            marginLeft: 3,
            marginRight: 3,
        },
    };

    return baseStyles;
};
