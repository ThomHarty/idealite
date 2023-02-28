import { COLORS } from "../../../theme";
import { TabIconStyles } from "./TabIcon.types";

export const baseStyles: TabIconStyles = {
    iconContainer: {
        paddingTop: 12,
        paddingBottom: 12,
        width: 25,
    },
    icon: {
        fontSize: 21,
    },
    unread: {
        backgroundColor: COLORS.ACCENT_ONE,
        position: "absolute",
        top: 6,
        left: 24,
    },
    smallIconContainer: {
        position: "absolute",
        bottom: 12,
        right: -4,
    },
    smallIcon: {
        
    },
};
