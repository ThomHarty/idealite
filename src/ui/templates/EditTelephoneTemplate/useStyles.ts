import { COLORS } from "../../../theme";
import { EditTelephoneTemplateStyles } from "./EditTelephoneTemplate.types";

export const useStyles = (): EditTelephoneTemplateStyles => {
    const baseStyles: EditTelephoneTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        labelContainer: {
            paddingTop: 24,
            paddingLeft: 34,
            marginBottom: -7,
        },
        inputContainer: {
            paddingTop: 0,
            paddingRight: 34,
            paddingLeft: 34,
            paddingBottom: 16,
            flexDirection: "row",
        },
        codeContainer: {
            flex: 1,
            position: "relative",
            top: 21,
        },
        phoneContainer: {
            flex: 3,
            marginLeft: 25,
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
        topButtonContainer: {
            marginBottom: 12,
        },
    };

    return baseStyles;
};
