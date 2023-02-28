import {useWindowDimensions} from 'react-native';

import {AddSkillsTemplateStyles} from './AddSkillsTemplate.types';

export const useStyles = (): AddSkillsTemplateStyles => {
  const {height} = useWindowDimensions();
  const baseStyles: AddSkillsTemplateStyles = {
    container: {
      height: height - 87,
    },
    centerContainer: {},
    buttonContainer: {
      paddingRight: 18,
      paddingLeft: 18,
      width: '100%',
      position: 'absolute',
      bottom: 43,
    },
    avatarContainer: {
      marginTop: 24,
      marginBottom: 24,
      paddingRight: 34,
      paddingLeft: 34,
    },
    headingContainer: {
      marginBottom: 34,
      paddingRight: 34,
      paddingLeft: 34,
    },
    addSkillContainer: {
      padding: 18,
    },
  };

  return baseStyles;
};
