import {useWindowDimensions} from 'react-native';
import {COLORS} from '../../../theme';

import {SingleSwipeCardStyles} from './SingleSwipeCard.types';

export const useStyles = (opacity: number) => {
  const {height} = useWindowDimensions();

  const breakpoint = 600;
  const smallScreen = height < breakpoint;
  const smallScreenCardHeight = height * 0.55;
  const largeScreenCardHeight = height * 0.59;

  const baseStyles: SingleSwipeCardStyles = {
    container: {
      position: 'absolute',
      top: height / 2 - height * 0.36,
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
      opacity,
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
    },
    content: {
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
      borderRadius: 20,
      position: 'absolute',
    },
  };

  return baseStyles;
};
