import {ThemeKeys, COLORS} from '../../../../../../theme';

// default
const background: ThemeKeys = {
  light: COLORS.BORDER,
  dark: COLORS.BORDER,
};

const border: ThemeKeys = {
  light: COLORS.BORDER,
  dark: COLORS.BORDER,
};

const text: ThemeKeys = {
  light: COLORS.GREY_DARK,
  dark: COLORS.GREY_DARK,
};

// pressed
const pressedBackground: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

const pressedBorder: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

const pressedText: ThemeKeys = {
  light: COLORS.GREY_DARK,
  dark: COLORS.GREY_DARK,
};

// disabled
const disabledBackground: ThemeKeys = {
  light: COLORS.BORDER,
  dark: COLORS.BORDER,
};

const disabledBorder: ThemeKeys = {
  light: COLORS.BORDER,
  dark: COLORS.BORDER,
};

const disabledText: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

export const tertiaryColors = {
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
