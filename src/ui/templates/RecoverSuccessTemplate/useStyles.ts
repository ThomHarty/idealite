import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { RecoverSuccessTemplateStyles } from "./RecoverSuccessTemplate.types";

export const useStyles = (): RecoverSuccessTemplateStyles => {
    const { height } = useWindowDimensions();
    const baseStyles: RecoverSuccessTemplateStyles = {
        container: {
            justifyContent: "space-between",
            height: height - 87,
        },
        buttonContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            paddingBottom: 43,
        },
        centerContainer: {
            paddingRight: 34,
            paddingLeft: 34,
            alignItems: "center",
            justifyContent: "center",
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
    };

    return baseStyles;
};
