import { ThemeKeys, COLORS } from "../../../../../../theme";

// default
const background: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

const border: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

const text: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

// pressed
const pressedBackground: ThemeKeys = { 
    light: COLORS.ACCENT_TWO, dark: COLORS.ACCENT_TWO 
};

const pressedBorder: ThemeKeys = { 
    light: COLORS.ACCENT_TWO, dark: COLORS.ACCENT_TWO 
};

const pressedText: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

// disabled
const disabledBackground: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

const disabledBorder: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const disabledText: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

export const secondaryColors = {
    background,
    border,
    text,
    pressedBackground,
    pressedBorder,
    pressedText,
    disabledBackground,
    disabledBorder,
    disabledText,
};
