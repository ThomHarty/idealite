import { COLORS } from "../../../theme";
import { SwipeIconsStyles } from "./SwipeIcons.types";

export const baseStyles: SwipeIconsStyles = {
    iconsContainer: {
        height: 72,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 99,
    },
    icon: {
        paddingLeft: 24,
        paddingRight: 24,
        color: COLORS.GREY,
        opacity: 1,
    },
    moreIcon: {
        fontSize: 6,
    },
    filterIcon: {
        fontSize: 18,
    },
    flatIcon: {

    },
    tickIcon: {
        position: "absolute",
        top: 10,
        left: 10,
        opacity: 0,
    },
    crossIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        opacity: 0,
    },
};
