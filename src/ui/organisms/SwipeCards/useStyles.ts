import {StyleSheet, useWindowDimensions} from 'react-native';

import {COLORS} from '../../../theme';
import {useBreakpoint} from '../../../theme/breakpoint/useBreakpoint';
import {SwipeCardsStyles} from './SwipeCards.types';

export const useStyles = () => {
  const {height} = useWindowDimensions();
  const {smallScreen} = useBreakpoint();

  const smallScreenCardHeight = height * 0.55;
  const largeScreenCardHeight = height * 0.59;

  const baseStyles: SwipeCardsStyles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: height / 2 - height * 0.36,
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
    },
    cardsContainer: {
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      padding: 18,
      alignItems: 'center',
    },
    card: {
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
      borderRadius: 20,
      backgroundColor: COLORS.WHITE,
      position: 'absolute',
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
    content: {
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
      borderRadius: 20,
      position: 'absolute',
    },
  });

  return baseStyles;
};
