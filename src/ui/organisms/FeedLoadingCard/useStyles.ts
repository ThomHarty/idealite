import {useWindowDimensions} from 'react-native';
import {COLORS} from '../../../theme';

import {FeedLoadingCardStyles} from './FeedLoadingCard.types';

export const useStyles = () => {
  const {height} = useWindowDimensions();

  const breakpoint = 600;
  const smallScreen = height < breakpoint;
  const smallScreenCardHeight = height * 0.55;
  const largeScreenCardHeight = height * 0.59;

  const baseStyles: FeedLoadingCardStyles = {
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      height: 116,
      width: 117,
    },
    handsContainer: {
      height: 74,
      width: 79,
      alignSelf: 'center',
      position: 'relative',
      top: 24,
    },
    loadingContainer: {
      position: 'relative',
      bottom: 74,
    },
  };

  return baseStyles;
};
