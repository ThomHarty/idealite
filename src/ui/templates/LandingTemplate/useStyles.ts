import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBreakpoint} from '../../../theme/breakpoint/useBreakpoint';
import {LandingTemplateStyles} from './LandingTemplate.types';

export const useStyles = (): LandingTemplateStyles => {
  const {height} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  const {smallScreen} = useBreakpoint();

  const baseStyles: LandingTemplateStyles = {
    container: {
      flex: 1,
    },
    topContainer: {
      height: smallScreen ? height * 0.3 : height * 0.4,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    svgContainer: {
      height: 161,
      width: 184,
    },
    iconContainer: {
      position: 'relative',
      top: 30,
      height: 99,
      width: 106,
      alignSelf: 'center',
    },
    bottomContainer: {
      position: 'absolute',
      bottom: 0,
      paddingBottom: bottom,
      width: '100%',
    },
    buttonContainer: {
      paddingRight: 18,
      paddingBottom: 12,
      paddingLeft: 18,
    },
    textContainer: {
      paddingTop: 12,
      paddingBottom: 24,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  };

  return baseStyles;
};
