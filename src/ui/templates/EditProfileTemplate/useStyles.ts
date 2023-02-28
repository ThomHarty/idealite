import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { EditProfileTemplateStyles } from "./EditProfileTemplate.types";

export const useStyles = (): EditProfileTemplateStyles => {
    const { width } = useWindowDimensions();
    const baseStyles: EditProfileTemplateStyles = {
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
            backgroundColor: COLORS.WHITE,
        },
        topButtonContainer: {
            marginBottom: 12,
        },
        avatarContainer: {
            paddingTop: 18,
            paddingRight: 34,
            paddingBottom: 18,
            paddingLeft: 34,
        },
        iconContainer: {
            position: "absolute",
            left: 75,
            top: 55,
        },
        itemContainer: {
            flexDirection: "row",
            paddingRight: 34,
            paddingLeft: 34,
            paddingTop: 20,
            paddingBottom: 24,
            alignItems: "center",
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
        fakeInputIcon: {
            fontSize: 15,
        },
        svgsContainer: {
            paddingTop: 24,
            paddingBottom: 24,
        },
        svgsTextContainer: {
            paddingLeft: 34,
            paddingRight: 34,
            paddingBottom: 12,
        },
        svgRow: {
            flexDirection: "row",
            paddingBottom: 10,
        },
        svg: {
            paddingLeft: 5,
            paddingRight: 5,
        },
    };

    return baseStyles;
};
