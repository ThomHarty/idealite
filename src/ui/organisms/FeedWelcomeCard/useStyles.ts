import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { FeedWelcomeCardStyles } from "./FeedWelcomeCard.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();

    const breakpoint = 600;
    const smallScreen = height < breakpoint;
    const smallScreenCardHeight = height * 0.55;
    const largeScreenCardHeight = height * 0.59;
    
    const baseStyles: FeedWelcomeCardStyles = {
        container: {
            height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        iconContainer: {
            height: 69,
            marginBottom: 27,
        },
        icon: {
            color: COLORS.ACCENT_ONE,
            fontSize: 68,
        },
        headingContainer: {
            marginBottom: 12,
            textAlign: "center",
        },
        infoContainer: {
            width: 215,
            textAlign: "center",
        },
    };

    return baseStyles;
};
