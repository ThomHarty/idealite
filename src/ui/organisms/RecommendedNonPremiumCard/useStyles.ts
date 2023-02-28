import { useWindowDimensions } from "react-native";
import { RecommendedNonPremiumCardStyles } from "./RecommendedNonPremiumCard.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();

    const baseStyles: RecommendedNonPremiumCardStyles = {
        container: {
            height: height - 360,
            width: "100%",
            position: "absolute",
            top: 260,
        },
        wrapper: {
            height: height - 360,
            alignItems: "center",
            justifyContent: "center",
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
            marginBottom: 34,
        },
        bottomContainer: {
            width: "100%",
            paddingBottom: 90,
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
