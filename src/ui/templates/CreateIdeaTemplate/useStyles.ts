import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CreateIdeaTemplateStyles} from './CreateIdeaTemplate.types';

export const useStyles = (): CreateIdeaTemplateStyles => {
  const {bottom} = useSafeAreaInsets();

  const baseStyles: CreateIdeaTemplateStyles = {
    container: {
      flex: 1,
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
    },
    buttonContainer: {
      paddingRight: 18,
      paddingLeft: 18,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      paddingBottom: bottom,
    },
    linkContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      paddingTop: 18,
    },
    link: {
      textAlign: 'center',
    },
    avatarContainer: {
      marginTop: 24,
      marginBottom: 24,
    },
    ideaContainer: {
      marginTop: 17,
    },
  };

  return baseStyles;
};
