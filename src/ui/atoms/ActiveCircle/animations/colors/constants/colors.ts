import { ThemeKeys, COLORS } from "../../../../../../theme";

// default
const background: ThemeKeys = { 
    light: COLORS.TRANSPARENT, dark: COLORS.TRANSPARENT 
};

const border: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

// active
const activeBackground: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

const activeBorder: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

export const colors = {
    background,
    border,
    activeBackground,
    activeBorder,
};
