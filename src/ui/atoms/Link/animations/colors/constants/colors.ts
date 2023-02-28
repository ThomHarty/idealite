import {ThemeKeys, COLORS} from '../../../../../../theme';

// default
const text: ThemeKeys = {
  light: COLORS.PRIMARY,
  dark: COLORS.PRIMARY,
};

// pressed
const pressedText: ThemeKeys = {
  light: COLORS.ACCENT_TWO,
  dark: COLORS.ACCENT_TWO,
};

// disabled
const disabledText: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

export const colors = {
  text,
  pressedText,
  disabledText,
};
