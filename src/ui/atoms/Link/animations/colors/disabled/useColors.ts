import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    text: {
      color: colors.text[theme],
      textDecorationcolor: colors.text[theme],
    },
  };

  const disabledStyles = {
    text: {
      color: colors.disabledText[theme],
      textDecorationcolor: colors.disabledText[theme],
    },
  };

  return {styles, disabledStyles};
};
