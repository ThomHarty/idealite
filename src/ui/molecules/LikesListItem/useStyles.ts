import {StyleSheet, useWindowDimensions} from 'react-native';
import {LikesListItemStyles} from './LikesListItem.types';

export const useStyles = () => {
  const {width} = useWindowDimensions();

  const baseStyles: LikesListItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      paddingTop: 12,
      paddingBottom: 12,
    },
    avatarContainer: {
      width: 74,
      alignItems: 'center',
    },
    textContainer: {
      justifyContent: 'space-between',
      width: width - 152,
      paddingTop: 1,
      paddingBottom: 3,
    },
    svgContainer: {
      width: 74,
      alignItems: 'center',
    },
  });

  return baseStyles;
};
