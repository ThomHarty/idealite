import {useCallback} from 'react';
import {IOnboardingSlidesTemplateProps} from '../../../ui/templates';

export const useSlidesTestProps =
  useCallback((): IOnboardingSlidesTemplateProps['slidesText'] => {
    const slidesText = [
      {
        heading: 'Match with business founders and bring your ideas to life',
        text: 'Pursuing fresh, innovative ideas has never been easier!',
      },
      {
        heading: 'Middle slide with different text to highlight animations',
        text: 'Pursuing fresh, innovative ideas has never been easier!',
      },
      {
        heading: 'Match with business founders and bring your ideas to life',
        text: 'Pursuing fresh, innovative ideas has never been easier!',
      },
    ];

    return slidesText;
  }, []);
