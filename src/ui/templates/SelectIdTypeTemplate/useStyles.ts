import {COLORS} from '../../../theme';
import {SelectIdTypeTemplateStyles} from './SelectIdTypeTemplate.types';

export const useStyles = (): SelectIdTypeTemplateStyles => {
  const baseStyles: SelectIdTypeTemplateStyles = {
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
      flexDirection: 'row',
    },
    svg: {
      paddingLeft: 6,
      paddingRight: 6,
    },
    headingContainer: {
      textAlign: 'center',
      marginTop: 50,
      paddingLeft: 34,
      paddingRight: 34,
    },
  };

  return baseStyles;
};
