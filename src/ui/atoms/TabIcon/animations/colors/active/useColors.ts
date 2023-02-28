import {useTheme} from '../../../../../../theme';
import {colors} from '../constants';

export const useColors = () => {
  const {theme} = useTheme();

  const styles = {
    icon: {
      color: colors.icon[theme],
    },
    likesSentIcon: {
      color: colors.icon[theme],
    },
    smallIcon: {
      color: colors.icon[theme],
    },
  };

  const activeStyles = {
    icon: {
      color: colors.activeIcon[theme],
    },
    likesSentIcon: {
      color: colors.isLikesSentActiveIcon[theme],
    },
    smallIcon: {
      color: colors.isLikesSentSmallActiveIcon[theme],
    },
  };

  return {styles, activeStyles};
};
