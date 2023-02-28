import { ExpiredNDATemplateStyles } from "./ExpiredNDATemplate.types";

export const useStyles = () => {
    const baseStyles: ExpiredNDATemplateStyles = {
        container: {
            flex: 1,
        },
        bodyContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 70,
        },
        buttonsContainer: {
            width: "100%",
            paddingTop: 24,
            paddingRight: 18,
            paddingBottom: 24,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
        },
    };

    return baseStyles;
};
