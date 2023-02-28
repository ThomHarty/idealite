import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    input: {
      borderColor: colors.border[theme],
    },
  };

  const disabledStyles = {
    input: {
      borderColor: colors.disabledBorder[theme],
    },
  };

  return {styles, disabledStyles};
};
