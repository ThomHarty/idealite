import {StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from '../../../theme';
import {SentNDAMessageStyles} from './SentNDAMessage.types';

export const useStyles = () => {
  const {width} = useWindowDimensions();

  const baseStyles: SentNDAMessageStyles = StyleSheet.create({
    container: {
      paddingTop: 8,
      paddingBottom: 8,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    messageContainer: {
      maxWidth: width - 86,
      backgroundColor: COLORS.ACCENT_TWO,
      borderWidth: 1,
      borderColor: COLORS.ACCENT_TWO,
      borderRadius: 25,
      padding: 16,
    },
    headingWrapper: {
      marginBottom: 12,
    },
    messageWrapper: {
      marginTop: 12,
      marginBottom: 12,
    },
    footerWrapper: {
      marginTop: 12,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 4,
    },
    avatarContainer: {
      marginLeft: 8,
      marginRight: 18,
    },
    readContainer: {
      marginRight: 54,
      alignItems: 'flex-end',
      marginTop: -4,
      marginBottom: 8,
    },
  });

  return baseStyles;
};
