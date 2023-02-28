import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {OnboardingNameTemplateStyles} from './OnboardingNameTemplate.types';

export const useStyles = (): OnboardingNameTemplateStyles => {
  const {height} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const baseStyles: OnboardingNameTemplateStyles = {
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
      height: height - 300,
    },
    headingContainer: {
      marginBottom: 17,
    },
    inputContainer: {
      marginTop: 17,
    },
  };

  return baseStyles;
};
