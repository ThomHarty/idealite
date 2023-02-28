import { ThemeKeys, COLORS } from "../../../../../../theme";

// default
const background: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

const border: ThemeKeys = { 
    light: COLORS.PRIMARY, dark: COLORS.PRIMARY 
};

const text: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

// pressed
const pressedBackground: ThemeKeys = { 
    light: COLORS.PRIMARY_DARK, dark: COLORS.PRIMARY_DARK 
};

const pressedBorder: ThemeKeys = { 
    light: COLORS.PRIMARY_DARK, dark: COLORS.PRIMARY_DARK 
};

const pressedText: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

// disabled
const disabledBackground: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const disabledBorder: ThemeKeys = { 
    light: COLORS.GREY, dark: COLORS.GREY 
};

const disabledText: ThemeKeys = { 
    light: COLORS.WHITE, dark: COLORS.WHITE 
};

export const primaryColors = {
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
