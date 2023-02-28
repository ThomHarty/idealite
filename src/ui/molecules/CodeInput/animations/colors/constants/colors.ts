import { ThemeKeys, COLORS } from "../../../../../../theme";

// default
const border: ThemeKeys = { 
    light: COLORS.ACCENT_ONE, dark: COLORS.ACCENT_ONE 
};

// invalid
const invalidBorder: ThemeKeys = { 
    light: COLORS.DANGER, dark: COLORS.DANGER 
};

// success
const successBorder: ThemeKeys = { 
    light: COLORS.SUCCESS, dark: COLORS.SUCCESS 
};

export const colors = {
    border,
    invalidBorder,
    successBorder,
};
