import { COLORS } from "../../../theme";
import { TypographyStyles } from "./Typography.types";

export const useStyles = (color?: string, lineHeight?: number) => {
    const baseStyles: TypographyStyles = {
        text: {
            color: color || COLORS.PRIMARY,
            lineHeight,
        },
    };

    return baseStyles;
};
