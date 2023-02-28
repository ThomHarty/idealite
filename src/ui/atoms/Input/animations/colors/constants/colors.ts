import {ThemeKeys, COLORS} from '../../../../../../theme';

// default
const border: ThemeKeys = {
  light: COLORS.ACCENT_ONE,
  dark: COLORS.ACCENT_ONE,
};

// invalid
const invalidBorder: ThemeKeys = {
  light: COLORS.DANGER,
  dark: COLORS.DANGER,
};

// disabled
const disabledBorder: ThemeKeys = {
  light: COLORS.GREY_DARK,
  dark: COLORS.GREY_DARK,
};

export const colors = {
  border,
  invalidBorder,
  disabledBorder,
};
