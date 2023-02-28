import { ThemeKeys, COLORS } from "../../../../../../theme";

// default
const background: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const border: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const center: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

// checked
const checkedBackground: ThemeKeys = { 
    light: COLORS.ACCENT_ONE, dark: COLORS.ACCENT_ONE 
};

const checkedBorder: ThemeKeys = { 
    light: COLORS.ACCENT_ONE, dark: COLORS.ACCENT_ONE 
};

const checkedCenter: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

// disabled
const disabledBackground: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const disabledBorder: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const disabledCenter: ThemeKeys = { 
    light: COLORS.GREY_LIGHT, dark: COLORS.GREY_LIGHT 
};

export const colors = {
    background,
    border,
    center,
    checkedBackground,
    checkedBorder,
    checkedCenter,
    disabledBackground,
    disabledBorder,
    disabledCenter,
};
