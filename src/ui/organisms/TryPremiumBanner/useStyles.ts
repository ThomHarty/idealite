import {COLORS} from '../../../theme';
import {TryPremiumBannerStyles} from './TryPremiumBanner.types';

export const useStyles = () => {
  const baseStyles: TryPremiumBannerStyles = {
    container: {
      height: 126,
    },
    contentContainer: {
      flexDirection: 'row',
      height: 126,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      height: 75,
      width: 75,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      backgroundColor: COLORS.ACCENT_TWO,
      // shadow
      shadowColor: COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    iconButtonContainer: {
      position: 'absolute',
      zIndex: 99,
      top: -10,
      right: -10,
      height: 32,
      width: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.SUCCESS,
    },
    sharedIcon: {
      color: COLORS.WHITE,
      fontSize: 17,
    },
    icon: {
      height: 50,
      width: 54,
    },
    textContainer: {
      marginLeft: 17,
    },
    headingContainer: {
      flexDirection: 'row',
      marginBottom: 7,
    },
    infoContainer: {
      width: 180,
    },
  };

  return baseStyles;
};
