import { useTheme } from "../../../../../../theme";
import { colors } from "../constants";

export const useColors = () => {
    const { theme } = useTheme();

    const styles = {
        circle: {
            borderColor: colors.border[theme],
            backgroundColor: colors.background[theme],
        },
    };

    const activeStyles = {
        circle: {
            borderColor: colors.activeBorder[theme],
            backgroundColor: colors.activeBackground[theme],
        },
    };

    return { styles, activeStyles };
};
