import {COLORS} from '../../../theme';
import {IconButtonStyles, IIconButtonProps} from './IconButton.types';

interface Props {
  size: IIconButtonProps['size'];
  iconColor?: IIconButtonProps['iconColor'];
}

export const useStyles = ({size, iconColor}: Props) => {
  const diameter = size === 'small' ? 46 : 96;

  const baseStyles: IconButtonStyles = {
    wrapper: {
      width: diameter,
    },
    container: {
      marginTop: 2,
      backgroundColor: COLORS.WHITE,
      height: diameter,
      width: diameter,
      borderRadius: diameter / 2,
      alignItems: 'center',
      justifyContent: 'center',
      // shadow
      shadowColor: COLORS.ACCENT_ONE,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 3.84,
      elevation: 5,
    },
    icon: {
      color: iconColor || COLORS.GREY_DARK,
      fontSize: size === 'small' ? 15 : 32,
    },
  };

  return baseStyles;
};
