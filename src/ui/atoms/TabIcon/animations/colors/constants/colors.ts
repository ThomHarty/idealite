import {ThemeKeys, COLORS} from '../../../../../../theme';

// default
const icon: ThemeKeys = {
  light: COLORS.GREY,
  dark: COLORS.GREY,
};

// active
const activeIcon: ThemeKeys = {
  light: COLORS.PRIMARY,
  dark: COLORS.PRIMARY,
};

const isLikesSentActiveIcon: ThemeKeys = {
  light: COLORS.ACCENT_ONE,
  dark: COLORS.ACCENT_ONE,
};

const isLikesSentSmallActiveIcon: ThemeKeys = {
  light: COLORS.PRIMARY,
  dark: COLORS.PRIMARY,
};

export const colors = {
  icon,
  activeIcon,
  isLikesSentActiveIcon,
  isLikesSentSmallActiveIcon,
};
