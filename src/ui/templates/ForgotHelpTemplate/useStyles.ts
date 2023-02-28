import {useWindowDimensions} from 'react-native';

import {ForgotHelpTemplateStyles} from './ForgotHelpTemplate.types';

export const useStyles = (): ForgotHelpTemplateStyles => {
  const {height} = useWindowDimensions();
  const baseStyles: ForgotHelpTemplateStyles = {
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
    svgContainer: {
      height: 260,
      width: 243,
      alignSelf: 'center',
      marginBottom: 34,
    },
    headingContainer: {
      marginBottom: 17,
    },
    infoContainer: {
      marginTop: 17,
    },
  };

  return baseStyles;
};
