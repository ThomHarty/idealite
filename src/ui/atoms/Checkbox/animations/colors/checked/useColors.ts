import { useTheme } from "../../../../../../theme";
import { colors } from "../constants";

export const useColors = () => {
    const { theme } = useTheme();

    const styles = {
        container: {
            borderColor: colors.border[theme],
            backgroundColor: colors.background[theme],
        },
    };

    const checkedStyles = {
        container: {
            borderColor: colors.checkedBorder[theme],
            backgroundColor: colors.checkedBackground[theme],
        },
    };

    return { styles, checkedStyles };
};
