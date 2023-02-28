import {EditSkillTemplateStyles} from './EditSkillTemplate.types';

export const useStyles = (): EditSkillTemplateStyles => {
  const baseStyles: EditSkillTemplateStyles = {
    container: {
      flex: 1,
    },
    inputContainer: {
      paddingTop: 24,
      paddingRight: 18,
      paddingLeft: 18,
      paddingBottom: 16,
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
