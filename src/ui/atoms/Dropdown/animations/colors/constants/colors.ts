import { ThemeKeys, COLORS } from "../../../../../../theme";

// default border
const border: ThemeKeys = { 
    light: COLORS.ACCENT_ONE, dark: COLORS.ACCENT_ONE 
};

// disabled border
const disabledBorder: ThemeKeys = { 
    light: COLORS.GREY_DARK, dark: COLORS.GREY_DARK 
};

// default background
const background: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

// selected
const selectedBackground: ThemeKeys = { 
    light: COLORS.ACCENT_TWO, dark: COLORS.ACCENT_TWO 
};

export const colors = {
    border,
    disabledBorder,
    background,
    selectedBackground,
};
