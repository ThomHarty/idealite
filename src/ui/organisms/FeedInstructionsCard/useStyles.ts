import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { FeedInstructionsCardStyles } from "./FeedInstructionsCard.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();

    const breakpoint = 600;
    const smallScreen = height < breakpoint;
    const smallScreenCardHeight = height * 0.55;
    const largeScreenCardHeight = height * 0.59;
    
    const baseStyles: FeedInstructionsCardStyles = {
        container: {
            height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
            width: "100%",
        },
        halfContainer: {
            height: smallScreen ? smallScreenCardHeight / 2 : largeScreenCardHeight / 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        dividerContainer: {
            overflow: "hidden",
        },
        divider: {
            width: "100%",
            height: 2,
            borderStyle: "dashed",
            borderWidth: 2,
            borderColor: COLORS.GREY_DARK,
            opacity: 0.5,
            marginTop: -2,
        },
        iconContainer: {
            height: 75,
            width: 55,
            marginBottom: 16,
        },
        headingContainer: {
            textAlign: "center",
        },
    };

    return baseStyles;
};
