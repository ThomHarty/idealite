import { COLORS } from "../../../theme";
import { SwipeUserInfoStyles } from "./SwipeUserInfo.types";

export const baseStyles: SwipeUserInfoStyles = {
    container: {
        flexDirection: "row",
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 24,
    },
    avatar: {
        marginRight: 16,
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    separator: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: COLORS.GREY_DARK,
        marginLeft: 8,
        marginRight: 8,
    },
};
