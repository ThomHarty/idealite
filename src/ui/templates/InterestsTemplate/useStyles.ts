import {useWindowDimensions} from 'react-native';
import {COLORS} from '../../../theme';
import {InterestsTemplateStyles} from './InterestsTemplate.types';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const baseStyles: InterestsTemplateStyles = {
    container: {
      flexGrow: 1,
    },
    headingContainer: {
      paddingTop: 24,
      paddingRight: 18,
      paddingBottom: 24,
      paddingLeft: 18,
    },
    subHeadingContainer: {
      paddingRight: 18,
      paddingBottom: 9,
      paddingLeft: 18,
    },
    likesNonPremiumContainer: {
      zIndex: 99,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      height,
      width,
      position: 'absolute',
    },
    recNonPremiumContainer: {
      zIndex: 99,
      height,
      width,
      position: 'absolute',
    },
    noActivityContainer: {
      height: height - 170,
      width,
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      height: 60,
      width: 60,
    },
    icon: {
      color: COLORS.GREY,
      fontSize: 45,
    },
    smallIcon: {
      color: COLORS.GREY,
      fontSize: 21,
      position: 'absolute',
      bottom: 13,
      right: 5,
    },
    iconTextContainer: {
      marginTop: 7,
    },
  };

  return baseStyles;
};
