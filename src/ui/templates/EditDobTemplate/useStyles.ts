import {COLORS} from '../../../theme';
import {EditDobTemplateStyles} from './EditDobTemplate.types';

export const useStyles = (): EditDobTemplateStyles => {
  const baseStyles: EditDobTemplateStyles = {
    container: {
      flex: 1,
      backgroundColor: COLORS.GREY_LIGHT,
    },
    inputContainer: {
      paddingTop: 24,
      paddingRight: 34,
      paddingLeft: 34,
      paddingBottom: 16,
      flexDirection: 'row',
    },
    ddContainer: {
      flex: 1,
    },
    mmContainer: {
      flex: 1,
      position: 'relative',
      left: 25,
    },
    yyyyContainer: {
      flex: 2,
      marginLeft: 50,
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
    topButtonContainer: {
      marginBottom: 12,
    },
  };

  return baseStyles;
};
