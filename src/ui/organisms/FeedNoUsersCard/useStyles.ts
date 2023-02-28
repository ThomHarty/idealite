import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { FeedNoUsersCardStyles } from "./FeedNoUsersCard.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();

    const breakpoint = 600;
    const smallScreen = height < breakpoint;
    const smallScreenCardHeight = height * 0.55;
    const largeScreenCardHeight = height * 0.59;
    
    const baseStyles: FeedNoUsersCardStyles = {
        container: {
            height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
            width: "100%",
            borderRadius: 20,
        },
        topIconContainer: {
            padding: 24,
            paddingBottom: 0,
            alignSelf: "flex-end",
        },
        icon: {
            color: COLORS.GREY,
            opacity: 1,
        },
        filterIcon: {
            fontSize: 18,
        },
        iconContainer: {
            height: 126,
            width: 115,
            marginBottom: 27,
            alignSelf: "center",
        },
        headingContainer: {
            marginBottom: 14,
            textAlign: "center",
            width: 200,
            alignSelf: "center",
        },
        infoContainer: {
            textAlign: "center",
            width: 260,
            alignSelf: "center",
        },
        bottomContainer: {
            position: "absolute",
            width: "100%",
            bottom: smallScreen ? 24 : 34, 
        },
        buttonContainer: {
            paddingRight: 24,
            paddingLeft: 24,
        },
    };

    return baseStyles;
};
