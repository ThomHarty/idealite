import {COLORS} from '../../../theme';
import {
  FlatIconButtonStyles,
  IFlatIconButtonProps,
} from './FlatIconButton.types';

interface Props {
  iconColor?: IFlatIconButtonProps['iconColor'];
  backgroundColor?: IFlatIconButtonProps['backgroundColor'];
  borderColor?: IFlatIconButtonProps['borderColor'];
  diameter?: IFlatIconButtonProps['diameter'];
  iconSize?: IFlatIconButtonProps['iconSize'];
}

export const useStyles = ({
  iconColor,
  backgroundColor,
  borderColor,
  diameter,
  iconSize,
}: Props) => {
  const plusBorder = borderColor ? 2 : 0;
  const computedDiameter = (diameter || 38) + plusBorder;

  const baseStyles: FlatIconButtonStyles = {
    wrapper: {},
    container: {
      marginTop: 2,
      backgroundColor: backgroundColor || COLORS.ACCENT_ONE,
      borderColor: borderColor || backgroundColor || COLORS.ACCENT_ONE,
      borderWidth: borderColor ? 1 : 0,
      height: computedDiameter,
      width: computedDiameter,
      borderRadius: computedDiameter / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      color: iconColor || COLORS.PRIMARY,
      fontSize: iconSize || 18,
    },
  };

  return baseStyles;
};
