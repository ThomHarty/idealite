import {ThemeKeys, COLORS} from '../../../../../../theme';

// default
const background: ThemeKeys = {
  light: COLORS.WHITE,
  dark: COLORS.WHITE,
};

const border: ThemeKeys = {
  light: COLORS.PRIMARY,
  dark: COLORS.PRIMARY,
};

// checked
const checkedBackground: ThemeKeys = {
  light: COLORS.ACCENT_ONE,
  dark: COLORS.ACCENT_ONE,
};

const checkedBorder: ThemeKeys = {
  light: COLORS.PRIMARY_DARK,
  dark: COLORS.PRIMARY_DARK,
};

// disabled
const disabledBackground: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

const disabledBorder: ThemeKeys = {
  light: COLORS.GREY_DARK,
  dark: COLORS.GREY_DARK,
};

export const colors = {
  background,
  border,
  checkedBackground,
  checkedBorder,
  disabledBackground,
  disabledBorder,
};
