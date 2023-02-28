import { COLORS } from "../../../theme";
import { NonPremiumBillingTemplateStyles } from "./NonPremiumBillingTemplate.types";

export const useStyles = (): NonPremiumBillingTemplateStyles => {
    const baseStyles: NonPremiumBillingTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
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
