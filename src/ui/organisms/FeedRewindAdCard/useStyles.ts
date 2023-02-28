import {useWindowDimensions} from 'react-native';

import {FeedRewindAdCardStyles} from './FeedRewindAdCard.types';

export const useStyles = () => {
  const {height} = useWindowDimensions();

  const breakpoint = 600;
  const smallScreen = height < breakpoint;
  const smallScreenCardHeight = height * 0.55;
  const largeScreenCardHeight = height * 0.59;

  const baseStyles: FeedRewindAdCardStyles = {
    container: {
      height: smallScreen ? smallScreenCardHeight : largeScreenCardHeight,
      width: '100%',
      borderRadius: 20,
    },
    topTextContainer: {
      textAlign: 'center',
      paddingTop: 34,
      paddingBottom: 50,
    },
    iconContainer: {
      height: 70,
      width: 104,
      marginBottom: 27,
      alignSelf: 'center',
    },
    headingContainer: {
      marginBottom: 7,
      textAlign: 'center',
    },
    subHeadingContainer: {
      marginBottom: 17,
      textAlign: 'center',
    },
    infoContainer: {
      textAlign: 'center',
      width: 220,
      alignSelf: 'center',
    },
    bottomContainer: {
      position: 'absolute',
      width: '100%',
      bottom: smallScreen ? 24 : 34,
    },
    buttonContainer: {
      paddingRight: 24,
      paddingLeft: 24,
    },
    linkContainer: {
      alignSelf: 'center',
      marginTop: 17,
    },
  };

  return baseStyles;
};
