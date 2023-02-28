import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    container: {
      borderColor: colors.border[theme],
      backgroundColor: colors.background[theme],
    },
    center: {
      backgroundColor: colors.center[theme],
    },
  };

  const disabledStyles = {
    container: {
      borderColor: colors.disabledBorder[theme],
      backgroundColor: colors.disabledBackground[theme],
    },
    center: {
      backgroundColor: colors.disabledCenter[theme],
    },
  };

  return {styles, disabledStyles};
};
