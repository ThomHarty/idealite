import { COLORS } from "../../../theme";
import { PremiumBillingTemplateStyles } from "./PremiumBillingTemplate.types";

export const useStyles = (): PremiumBillingTemplateStyles => {
    const baseStyles: PremiumBillingTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        // top
        premiumContainer: {
            flexDirection: "row",
            paddingTop: 38,
            paddingRight: 34,
            paddingLeft: 34,
            alignItems: "center",
        },
        svgContainer: {
            height: 50,
            width: 50,
            backgroundColor: COLORS.ACCENT_TWO,
            borderRadius: 11,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 23,
        },
        svg: {
            height: 35,
            width: 37,
        },
        iconContainer: {
            height: 22,
            width: 22,
            borderRadius: 11,
            backgroundColor: COLORS.SUCCESS,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -7,
            right: -7,
        },
        icon: {
            color: COLORS.WHITE,
            fontSize: 11,
        },
        premiumHeadingContainer: {
            flexDirection: "row",
        },
        premiumInfoContainer: {
            paddingTop: 16,
            paddingRight: 34,
            paddingBottom: 16,
            paddingLeft: 34,
        },
        // list
        premiumListContainer: {
            padding: 24,
            backgroundColor: COLORS.WHITE,
            borderRadius: 10,
            marginLeft: 18,
            marginRight: 18,
            marginBottom: 34,
            // shadow
            shadowColor: COLORS.ACCENT_ONE,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
        },
        listHeadingContainer: {
            marginBottom: 4,
        },
        listItemContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
        },
        listIconContainer: {
            marginRight: 12,
        },
        tick: {
            fontSize: 10,
            color: COLORS.SUCCESS,
        },
    };

    return baseStyles;
};
