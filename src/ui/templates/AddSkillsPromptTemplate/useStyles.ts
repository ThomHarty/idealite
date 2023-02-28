import {useWindowDimensions} from 'react-native';

import {AddSkillsPromptTemplateStyles} from './AddSkillsPromptTemplate.types';

export const useStyles = (): AddSkillsPromptTemplateStyles => {
  const {height} = useWindowDimensions();
  const baseStyles: AddSkillsPromptTemplateStyles = {
    container: {
      height: height - 87,
    },
    centerContainer: {
      paddingRight: 34,
      paddingLeft: 34,
    },
    svgContainer: {
      height: 33,
      width: 36,
      position: 'absolute',
      bottom: 22,
      left: 43,
    },
    buttonContainer: {
      paddingRight: 18,
      paddingLeft: 18,
      width: '100%',
      position: 'absolute',
      bottom: 43,
    },
    topButtonContainer: {
      marginBottom: 12,
    },
    avatarContainer: {
      marginTop: 24,
      marginBottom: 24,
    },
  };

  return baseStyles;
};
