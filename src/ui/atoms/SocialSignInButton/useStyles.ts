import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';

import {SocialSignInButtonStyles, Variant} from './SocialSignInButton.types';

export const useStyles = (variant: Variant): SocialSignInButtonStyles => {
  let backgroundColor;
  switch (variant) {
    case 'Apple':
      backgroundColor = COLORS.BLACK;
      break;
    case 'Facebook':
      backgroundColor = COLORS.FACEBOOK;
      break;
    case 'Google':
      backgroundColor = COLORS.WHITE;
      break;
  }

  const baseStyles: SocialSignInButtonStyles = StyleSheet.create({
    container: {
      height: 54,
      width: '100%',
      borderRadius: 27,
      backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    svgContainer: {
      height: 20,
      width: 20,
      marginRight: 14,
    },
  });

  return baseStyles;
};
