import {COLORS} from '../../../theme';
import {ChatHeaderStyles} from './ChatHeader.types';

export const useStyles = () => {
  const baseStyles: ChatHeaderStyles = {
    container: {
      zIndex: 99,
      backgroundColor: COLORS.WHITE,
      // shadow
      shadowColor: COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.05,
      shadowRadius: 3.84,
      elevation: 5,
    },
    headerContainer: {
      height: 58,
      flexDirection: 'row',
      alignItems: 'center',
    },
    chevronContainer: {
      marginLeft: 21,
      marginRight: 24,
    },
    chevron: {
      fontSize: 18,
    },
    avatarContainer: {
      marginRight: 14,
    },
  };

  return baseStyles;
};
