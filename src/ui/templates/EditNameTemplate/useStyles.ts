import { COLORS } from "../../../theme";
import { EditNameTemplateStyles } from "./EditNameTemplate.types";

export const useStyles = (): EditNameTemplateStyles => {
    const baseStyles: EditNameTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        inputContainer: {
            paddingTop: 24,
            paddingRight: 34,
            paddingLeft: 34,
            paddingBottom: 16,
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
