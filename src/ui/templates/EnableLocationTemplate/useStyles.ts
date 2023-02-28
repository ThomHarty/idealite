import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {EnableLocationTemplateStyles} from './EnableLocationTemplate.types';

export const useStyles = (): EnableLocationTemplateStyles => {
  const {height} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const baseStyles: EnableLocationTemplateStyles = {
    container: {
      flex: 1,
    },
    buttonContainer: {
      paddingRight: 18,
      paddingLeft: 18,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      paddingBottom: bottom,
    },
    centerContainer: {
      paddingRight: 34,
      paddingLeft: 34,
      justifyContent: 'center',
      alignItems: 'center',
      height: height - 300,
    },
    svgContainer: {
      marginBottom: 34,
      width: 196,
      height: 213,
    },
    headingContainer: {
      textAlign: 'center',
    },
    infoContainer: {
      marginTop: 17,
      textAlign: 'center',
    },
    linkContainer: {
      marginTop: 60,
      textAlign: 'center',
    },
  };

  return baseStyles;
};
