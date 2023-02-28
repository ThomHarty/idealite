import {StyleSheet, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBreakpoint} from '../../../theme/breakpoint/useBreakpoint';

import {OnboardingSlidesTemplateStyles} from './OnboardingSlidesTemplate.types';

export const useStyles = (): OnboardingSlidesTemplateStyles => {
  const {height} = useWindowDimensions();
  const {top, bottom} = useSafeAreaInsets();
  const {smallScreen} = useBreakpoint();

  const baseStyles: OnboardingSlidesTemplateStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    carouselContainer: {
      paddingTop: top,
      height: smallScreen ? height / 2 - 102 : height / 2 - 62,
    },
    svgContainer: {
      marginBottom: 17,
    },
    textContainer: {
      padding: 34,
      paddingTop: 17,
      paddingBottom: 17,
    },
    headingContainer: {
      marginBottom: 17,
    },
    ctaContainer: {
      position: 'absolute',
      bottom: 0,
      paddingRight: 18,
      paddingLeft: 18,
      width: '100%',
      paddingBottom: bottom,
    },
    linkContainer: {
      alignSelf: 'center',
      marginTop: 14,
    },
  });

  return baseStyles;
};
