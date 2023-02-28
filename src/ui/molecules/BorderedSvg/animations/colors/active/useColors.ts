import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = (activeBorderColor: string) => {
  const {theme} = useTheme();

  const styles = {
    container: {
      borderColor: colors.border[theme],
    },
  };

  const activeStyles = {
    container: {
      borderColor: activeBorderColor,
    },
  };

  return {styles, activeStyles};
};
