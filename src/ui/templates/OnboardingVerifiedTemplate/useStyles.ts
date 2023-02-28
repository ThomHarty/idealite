import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../theme";

import { OnboardingVerifiedTemplateStyles } from "./OnboardingVerifiedTemplate.types";

export const useStyles = (): OnboardingVerifiedTemplateStyles => {
    const { bottom } = useSafeAreaInsets();
    
    const baseStyles: OnboardingVerifiedTemplateStyles = {
        container: {
            flex: 1,
            justifyContent: "center",
        },
        buttonContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingBottom: bottom,
        },
        centerContainer: {
            paddingRight: 34,
            paddingLeft: 34,
            paddingBottom: bottom,
        },
        card: {
            height: 465,
            width: "100%",
            padding: 18,
            backgroundColor: COLORS.WHITE,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            // shadow
            shadowColor: COLORS.BLACK,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 3.84,
            elevation: 5,
        },
        svgContainer: {
            height: 123,
            width: 118,
        },
        iconContainer: {
            marginTop: 50,
            marginBottom: 50,
        },
        icon: {
            color: COLORS.SUCCESS,
            fontSize: 45,
        },
        textContainer: {
            textAlign: "center",
            width: 194,
        },
    };

    return baseStyles;
};
