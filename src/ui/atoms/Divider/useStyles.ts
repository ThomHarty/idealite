import {StyleSheet} from 'react-native';

import {COLORS, ThemeKeys, useTheme} from '../../../theme';
import {DividerStyles} from './Divider.types';

export const useStyles = (color?: string) => {
  const {theme} = useTheme();

  const backgroundColor: ThemeKeys = {
    light: COLORS.BORDER,
    dark: COLORS.BORDER,
  };

  const styles: DividerStyles = StyleSheet.create({
    divider: {
      backgroundColor: color || backgroundColor[theme],
      width: '100%',
      height: 1,
    },
  });

  return styles;
};
