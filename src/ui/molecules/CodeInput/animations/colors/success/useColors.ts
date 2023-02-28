import { useTheme } from "../../../../../../theme";
import { colors } from "../constants";

export const useColors = () => {
    const { theme } = useTheme();

    const styles = {
        input: {
            borderColor: colors.border[theme],
        },
    };

    const successStyles = {
        input: {
            borderColor: colors.successBorder[theme],
        },
    };

    return { styles, successStyles };
};
