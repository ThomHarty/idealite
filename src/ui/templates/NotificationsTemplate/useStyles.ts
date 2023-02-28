import { COLORS } from "../../../theme";
import { NotificationsTemplateStyles } from "./NotificationsTemplate.types";

export const useStyles = (): NotificationsTemplateStyles => {
    const baseStyles: NotificationsTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        headingContainer: {
            paddingTop: 48,
            paddingBottom: 24,
            paddingRight: 34,
            paddingLeft: 34,
        },
    };

    return baseStyles;
};
