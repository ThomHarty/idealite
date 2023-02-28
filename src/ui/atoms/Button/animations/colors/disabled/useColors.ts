import { useTheme } from "../../../../../../theme";
import { Variant } from "../../../Button.types";
import { primaryColors, secondaryColors, tertiaryColors } from "../constants";

export const useColors = (variant: Variant) => {
    const { theme } = useTheme();

    let colors;
    switch(variant) {
        case "primary":
            colors = primaryColors;
            break;
        case "secondary":
            colors = secondaryColors;
            break;
        case "tertiary":
            colors = tertiaryColors;
            break;
        default:
            colors = primaryColors;
    };

    const styles = {
        button: {
            borderColor: colors.border[theme],
            backgroundColor: colors.background[theme],
        },
        text: {
            color: colors.text[theme],
        },
    };

    const disabledStyles = {
        button: {
            borderColor: colors.disabledBorder[theme],
            backgroundColor: colors.disabledBackground[theme],
        },
        text: {
            color: colors.disabledText[theme],
        },
    };

    return { styles, disabledStyles };
};
