import {useWindowDimensions} from 'react-native';

import {FeedV2TemplateStyles} from './FeedV2Template.types';

export const useStyles = () => {
  const {height} = useWindowDimensions();

  const breakpoint = 600;

  const smallScreen = height < breakpoint;

  const baseStyles: FeedV2TemplateStyles = {
    container: {
      flex: 1,
    },
    swipeButtonsContainer: {
      width: '100%',
      position: 'absolute',
      bottom: smallScreen ? 17 : 34,
    },
  };

  return baseStyles;
};
