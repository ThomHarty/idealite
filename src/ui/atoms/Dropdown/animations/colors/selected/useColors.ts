import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    selected: {
      backgroundColor: colors.background[theme],
    },
  };

  const selectedStyles = {
    selected: {
      backgroundColor: colors.selectedBackground[theme],
    },
  };

  return {styles, selectedStyles};
};
