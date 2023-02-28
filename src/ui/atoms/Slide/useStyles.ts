import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";
import { SlideStyles } from "./Slide.types";
    
export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: SlideStyles = {
        container: {
            width: width - 68,
            height: 24,
            flexDirection: "row",
            alignItems: "center",
        },
        leftVr: {
            width: 2,
            height: 10,
            backgroundColor: COLORS.PRIMARY,
        },
        hr: {
            height: 2,
            width: width - 72,
            backgroundColor: COLORS.PRIMARY,
        },
        rightVr: {
            width: 2,
            height: 10,
            backgroundColor: COLORS.PRIMARY,
        },
        tracker: {
            height: 24,
            width: 24,
            borderRadius: 12,
            backgroundColor: COLORS.WHITE,
            position: "absolute",
            left: 2,
            borderColor: COLORS.ACCENT_ONE,
            borderWidth: 6,
        },
    };

    return baseStyles;
};
