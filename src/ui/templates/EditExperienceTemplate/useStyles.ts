import {EditExperienceTemplateStyles} from './EditExperienceTemplate.types';

export const useStyles = (): EditExperienceTemplateStyles => {
  const baseStyles: EditExperienceTemplateStyles = {
    container: {
      flex: 1,
    },
    inputContainer: {
      paddingTop: 24,
      paddingRight: 34,
      paddingLeft: 34,
      paddingBottom: 16,
    },
    secondInputContainer: {
      paddingTop: 16,
      paddingRight: 34,
      paddingLeft: 34,
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
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 24,
      paddingRight: 34,
      paddingBottom: 16,
      paddingLeft: 34,
    },
    checkboxTextContainer: {
      marginLeft: 12,
    },
    dropdownsContainer: {
      flexDirection: 'row',
      paddingTop: 16,
      paddingRight: 22,
      paddingBottom: 16,
      paddingLeft: 22,
    },
    dropdownWrapper: {
      width: '50%',
      paddingLeft: 12,
      paddingRight: 12,
    },
  };

  return baseStyles;
};
