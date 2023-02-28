import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "../../../theme";
import { ProfileSuccessTemplateStyles } from "./ProfileSuccessTemplate.types";

export const useStyles = (): ProfileSuccessTemplateStyles => {
    const { height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    
    const baseStyles: ProfileSuccessTemplateStyles = {
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
            alignItems: "center",
            height: height - 300,
        },
        iconContainer: {
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
        infoContainer: {
            marginTop: 17,
            textAlign: "center",
        },
    };

    return baseStyles;
};
