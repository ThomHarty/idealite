import {DownloadNDATemplateStyles} from './DownloadNDATemplate.types';

export const useStyles = () => {
  const baseStyles: DownloadNDATemplateStyles = {
    container: {
      flex: 1,
    },
    headingContainer: {
      paddingTop: 24,
      paddingRight: 38,
      paddingLeft: 38,
    },
    textContainer: {
      paddingTop: 24,
      paddingRight: 38,
      paddingLeft: 38,
      paddingBottom: 36,
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
