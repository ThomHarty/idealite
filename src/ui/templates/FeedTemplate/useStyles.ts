import {StyleSheet, useWindowDimensions} from 'react-native';

import {FeedTemplateStyles} from './FeedTemplate.types';

export const useStyles = () => {
  const {width} = useWindowDimensions();
  const baseStyles: FeedTemplateStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    cardContainer: {
      height: 525,
      alignItems: 'center',
      marginBottom: 34,
    },
    cardWrapper: {
      width: width - 36,
      zIndex: 99,
    },
    buttonsContainer: {
      marginBottom: 17,
    },
  });

  return baseStyles;
};
