import { useTheme } from "../../../../../../theme";
import { colors } from "../constants";

export const useColors = () => {
    const { theme } = useTheme();

    const styles = {
        text: {
            color: colors.text[theme],
            textDecorationcolor: colors.text[theme],
        },
    };

    const pressedStyles = {
        text: {
            color: colors.pressedText[theme],
            textDecorationcolor: colors.pressedText[theme],
        },
    };

    return { styles, pressedStyles };
};
