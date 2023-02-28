import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";
import { UserProfileTemplateStyles } from "./UserProfileTemplate.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();
    const baseStyles: UserProfileTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.ACCENT_TWO,
        },
        tabsContainer: {
            paddingTop: 18,
            paddingBottom: 100,
            backgroundColor: COLORS.GREY_LIGHT,
            borderTopColor: COLORS.BORDER,
            borderTopWidth: 1,
            flexGrow: 1,
            flex: 1,
        },
        headingContainer: {
            padding: 18,
            paddingTop: 34,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        textContainer: {
            paddingLeft: 18,
            paddingRight: 18,
        },
        swipeButtonsContainer: {
            position: "absolute",
            bottom: 17,
            width: "100%",
            alignItems: "center",
        },
        editButtonContainer: {
            padding: 18,
            paddingTop: 0,
        },
        editIconContainer: {
            height: 20,
            width: 18,
        },
        editIcon: {
            color: COLORS.GREY_DARK,
            fontSize: 17,
        },
        addButtonContainer: {
            paddingTop: 24,
            paddingBottom: 24,
            paddingRight: 18,
            paddingLeft: 18,
        },
    };

    return baseStyles;
};
