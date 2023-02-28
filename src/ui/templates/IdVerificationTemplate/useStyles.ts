import {COLORS} from '../../../theme';
import {IdVerificationTemplateStyles} from './IdVerificationTemplate.types';

export const useStyles = (): IdVerificationTemplateStyles => {
  const baseStyles: IdVerificationTemplateStyles = {
    container: {
      flex: 1,
      backgroundColor: COLORS.GREY_LIGHT,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 100,
    },
    buttonsContainer: {
      width: '100%',
      paddingTop: 24,
      paddingRight: 18,
      paddingBottom: 24,
      paddingLeft: 18,
      position: 'absolute',
      bottom: 0,
    },
    svgContainer: {
      height: 196,
      width: 196,
    },
    headingContainer: {
      textAlign: 'center',
      marginTop: 50,
    },
    infoContainer: {
      textAlign: 'center',
      marginTop: 14,
      width: 230,
    },
  };

  return baseStyles;
};
