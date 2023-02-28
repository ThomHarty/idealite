import {useTheme} from '../../../theme';
import {ChipStyles, Variant} from './Chip.types';
import {primary, secondary, tertiary} from './constants';

export const useStyles = (variant: Variant) => {
  const {theme} = useTheme();

  let colors;
  switch (variant) {
    case 'primary':
      colors = primary;
      break;
    case 'secondary':
      colors = secondary;
      break;
    case 'tertiary':
      colors = tertiary;
      break;
  }

  const baseStyles: ChipStyles = {
    container: {
      borderColor: colors.border[theme],
      borderWidth: 2,
      backgroundColor: colors.background[theme],
      alignSelf: 'flex-start',
      paddingTop: 9,
      paddingRight: 12,
      paddingBottom: 9,
      paddingLeft: 12,
      borderRadius: 50,
    },
    text: {
      color: colors.text[theme],
    },
  };

  return baseStyles;
};
