import { COLORS } from "../../../theme";
import { EditBioTemplateStyles } from "./EditBioTemplate.types";

export const useStyles = () => {
    const baseStyles: EditBioTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        headingContainer: {
            paddingTop: 24,
            paddingRight: 18,
            paddingLeft: 18,
            paddingBottom: 16,
        },
        textAreaContainer: {
            paddingRight: 18,
            paddingLeft: 18,
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
