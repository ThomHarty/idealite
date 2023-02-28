import {useWindowDimensions} from 'react-native';

import {RecoverPasswordTemplateStyles} from './RecoverPasswordTemplate.types';

export const useStyles = (): RecoverPasswordTemplateStyles => {
  const {height} = useWindowDimensions();
  const baseStyles: RecoverPasswordTemplateStyles = {
    container: {
      justifyContent: 'space-between',
      height: height - 87,
    },
    buttonContainer: {
      paddingRight: 18,
      paddingLeft: 18,
      paddingBottom: 43,
    },
    centerContainer: {
      paddingRight: 34,
      paddingLeft: 34,
    },
    headingContainer: {
      marginBottom: 17,
    },
    inputContainer: {
      marginTop: 17,
      marginBottom: 17,
    },
  };

  return baseStyles;
};
