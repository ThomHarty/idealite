import {useWindowDimensions} from 'react-native';

import {COLORS} from '../../../theme';
import {MessagesTemplateStyles} from './MessagesTemplate.types';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();
  const baseStyles: MessagesTemplateStyles = {
    container: {
      flexGrow: 1,
    },
    ctaContainer: {
      height: 52,
      width: '100%',
      backgroundColor: COLORS.SUCCESS,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ctaIconContainer: {
      marginRight: 14,
    },
    icon: {
      fontSize: 24,
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
    noActivityIcon: {
      color: COLORS.GREY,
      fontSize: 45,
    },
    iconTextContainer: {
      marginTop: 7,
    },
  };

  return baseStyles;
};
