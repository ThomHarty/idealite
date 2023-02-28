import { useWindowDimensions } from "react-native";

import { COLORS } from "../../../theme";
import { LikesNonPremiumCardStyles } from "./LikesNonPremiumCard.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();

    const breakpoint = 600;
    const smallScreen = height < breakpoint;    
    
    const baseStyles: LikesNonPremiumCardStyles = {
        container: {
            paddingTop: 38,
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            top: 0,
            height: 478,
            width: "100%",
            zIndex: 99,
        },
        cardContainer: {
            height: 478,
            width: "100%",
            borderRadius: 20,
            // shadow
            shadowColor: COLORS.BLACK,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
        },
        topTextContainer: {
            textAlign: "center",
            paddingTop: 34,
            paddingBottom: 50,
        },
        iconContainer: {
            height: 70,
            width: 104,
            marginBottom: 27,
            alignSelf: "center",
        },
        headingContainer: {
            marginBottom: 7,
            textAlign: "center",
        },
        subHeadingContainer: {
            marginBottom: 17,
            textAlign: "center",
        },
        infoContainer: {
            textAlign: "center",
            width: 220,
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
        linkContainer: {
            alignSelf: "center",
            marginTop: 17,
        },
    };

    return baseStyles;
};
