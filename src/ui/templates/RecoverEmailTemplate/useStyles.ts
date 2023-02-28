import { useWindowDimensions } from "react-native";

import { RecoverEmailTemplateStyles } from "./RecoverEmailTemplate.types";

export const useStyles = (): RecoverEmailTemplateStyles => {
    const { height } = useWindowDimensions();
    const baseStyles: RecoverEmailTemplateStyles = {
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
        },
        headingContainer: {
            marginBottom: 17,
        },
        inputContainer: {
            marginTop: 17,
        },
        linkContainer: {
            marginTop: 24,
        },
    };

    return baseStyles;
};
