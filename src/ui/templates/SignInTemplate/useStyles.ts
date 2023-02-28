import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBreakpoint } from "../../../theme/breakpoint/useBreakpoint";

import { SignInTemplateStyles } from "./SignInTemplate.types";

export const useStyles = (): SignInTemplateStyles => {
    const { height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    const { smallScreen } = useBreakpoint();
    
    const baseStyles: SignInTemplateStyles = {
        container: {
            justifyContent: "space-between",
            height: height - 87,
        },
        topContainer: {
            height: smallScreen ? (height / 2 - 132) : (height / 2 - 62),
            paddingTop: 41,
        },
        svgContainer: {
            
        },
        formContainer: {
            paddingRight: 18,
            paddingLeft: 18,
        },
        inputsContainer: {
            marginTop: 36,
            paddingRight: 16,
            paddingLeft: 16,
        },
        inputContainer: {
            marginBottom: 36,
        },
        linkContainer: {
            alignSelf: "center",
            marginBottom: 36,
        },
        buttonContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            paddingBottom: bottom,
            width: "100%",
        },
    };

    return baseStyles;
};
