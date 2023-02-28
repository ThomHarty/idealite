import {StyleSheet, useWindowDimensions} from 'react-native';
import {COLORS} from '../../../theme';
import {MessagesListItemStyles} from './MessagesListItem.types';

export const useStyles = () => {
  const {width} = useWindowDimensions();

  const baseStyles: MessagesListItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 80,
    },
    avatarContainer: {
      width: 100,
      alignItems: 'center',
    },
    textContainer: {
      justifyContent: 'space-between',
      width: width - 118,
      paddingTop: 1,
      paddingBottom: 3,
    },
    nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: COLORS.ACCENT_ONE,
      marginRight: 5,
    },
    titleContainer: {
      marginBottom: 3,
    },
  });

  return baseStyles;
};
