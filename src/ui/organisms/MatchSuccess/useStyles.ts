import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../theme";

import { MatchSuccessStyles } from "./MatchSuccess.types";

export const useStyles = () => {
    const { height, width } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    
    const baseStyles: MatchSuccessStyles = {
        container: {
            position: "absolute",
            top: 0,
            // height,
            // width,
            flex: 1,
        },
        bgContainer: {
            position: "absolute",
            top: 0,
            height: height - 161,
            width,
        },
        wrapper: {
            height: height - 161,
            width,
            alignItems: "center",
            justifyContent: "center",
        },
        cardContainer: {
            height: 264,
            paddingRight: 18,
            paddingLeft: 18,
        },
        card: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.WHITE,
            height: 264,
            width: width - 36,
            borderRadius: 20,
            position: "relative",
            bottom: 65,
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
        avatarsContainer: {
            flexDirection: "row",
        },
        headingContainer: {
            marginBottom: 10,
        },
        infoContainer: {
            marginBottom: 34,
        },
        tickContainer: {
            position: "relative",
            bottom: 14,
        },
        tick: {
            color: COLORS.SUCCESS,
            fontSize: 21,
        },
        buttonsContainer: {
            width: "100%",
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            paddingBottom: bottom * 1.75,
        },
        firstButtonContainer: {
            marginBottom: 12,
        },
    };

    return baseStyles;
};
