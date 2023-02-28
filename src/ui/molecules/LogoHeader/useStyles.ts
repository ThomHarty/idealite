import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../../../theme";
import { LogoHeaderStyles } from "./LogoHeader.types";

export const useStyles = () => {
    const { top, bottom } = useSafeAreaInsets();
    
    const baseStyles: LogoHeaderStyles = {
        container: {
            flexDirection: "row",
            justifyContent: "space-between",
            zIndex: 199,
            marginTop: 13,
            paddingTop: top,
            paddingBottom: bottom,
        },
        chevronContainer: {
            marginLeft: 21,
            marginTop: 3,
        },
        chevron: {
            fontSize: 18,
        },
        logoContainer: {
            height: 22,
            width: 100,
        },
        sideContainer: {
            width: 40,
        },
    };

    return baseStyles;
}
