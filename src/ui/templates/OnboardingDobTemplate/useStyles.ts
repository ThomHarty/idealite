import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { OnboardingDobTemplateStyles } from "./OnboardingDobTemplate.types";

export const useStyles = (): OnboardingDobTemplateStyles => {
    const { height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();

    const baseStyles: OnboardingDobTemplateStyles = {
        container: {
            flex: 1,
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
            justifyContent: "center",
            height: height - 300,
        },
        headingContainer: {
            marginBottom: 17,
        },
        inputContainer: {
            marginTop: 17,
            flexDirection: "row",
        },
        ddContainer: {
            flex: 1,
        },
        mmContainer: {
            flex: 1,
            position: "relative",
            left: 25,
        },
        yyyyContainer: {
            flex: 2,
            marginLeft: 50,
        },
    };

    return baseStyles;
};
