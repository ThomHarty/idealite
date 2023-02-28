import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    circle: {
      backgroundColor: colors.background[theme],
    },
  };

  const onlineStyles = {
    circle: {
      backgroundColor: colors.onlineBackground[theme],
    },
  };

  return {styles, onlineStyles};
};
