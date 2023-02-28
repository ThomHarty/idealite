import { COLORS } from "../../../theme";
import { ActiveBarStyles } from "./ActiveBar.types";

export const baseStyles: ActiveBarStyles = {
    bar: {
        width: "100%",
        height: 2,
        opacity: 0,
        backgroundColor: COLORS.ACCENT_ONE,
        position: "relative",
        top: 4,
    },
};
