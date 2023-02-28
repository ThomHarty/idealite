import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    input: {
      borderColor: colors.border[theme],
    },
  };

  const invalidStyles = {
    input: {
      borderColor: colors.invalidBorder[theme],
    },
  };

  return {styles, invalidStyles};
};
