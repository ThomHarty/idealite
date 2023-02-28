import { useWindowDimensions } from "react-native";

import { COLORS } from "../../../theme";
import { AccountSettingsTemplateStyles } from "./AccountSettingsTemplate.types";

export const useStyles = (): AccountSettingsTemplateStyles => {
    const { width } = useWindowDimensions();
    const baseStyles: AccountSettingsTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
        },
        topContainer: {
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 24,
            paddingBottom: 24,
        },
        nameContainer: {
            marginTop: 17,
        },
        itemContainer: {
            flexDirection: "row",
            paddingRight: 34,
            paddingLeft: 34,
            paddingTop: 20,
            paddingBottom: 24,
            alignItems: "center",
        },
        fakeEmailInputContainer: {
            width: "100%",
        },
        telephoneLabel: {
            marginTop: 24,
            marginLeft: 34,
            marginBottom: -14,
        },
        fakeTelephoneInputContainer: {
            width: width - 102,
            marginRight: 24,
            flexDirection: "row",
        },
        codeContainer: {
            width: 52,
            marginRight: 14,
        },
        numberContainer: {
            flexGrow: 1,
        },
        fakeInputContainer: {
            width: width - 102,
            marginRight: 24,
        },
        fakeInputIconContainer: {
            height: 22,
            width: 22,
            justifyContent: "center",
        },
        telephoneIconContainer: {
            height: 22,
            width: 22,
            justifyContent: "center",
            position: "relative",
            bottom: 14,
        },
        fakeInputIcon: {
            fontSize: 15,
        },
        dobContainer: {
            width: "33%",
            paddingRight: 14,
        },
        navItemContainer: {
            height: 64,
            flexDirection: "row",
            paddingRight: 24,
            paddingLeft: 34,
            alignItems: "center",
            justifyContent: "space-between",
        },
    };

    return baseStyles;
};
