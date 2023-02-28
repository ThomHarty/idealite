import React, {ReactElement, useState} from 'react';

import {
  INotificationsTemplateProps,
  NotificationsTemplate,
} from '../../ui/templates';

export const Notifications = ({navigation}: any): ReactElement => {
  const [insights, setInsights] = useState(true);
  const props: INotificationsTemplateProps = {
    onPressBack: () => navigation.goBack(),
    push: {
      insights: {
        text: 'Insights',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      newMatches: {
        text: 'New Matches',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      newMessages: {
        text: 'Messages',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      superLikes: {
        text: 'Super Likes',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      recommendations: {
        text: 'Recommendations',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
    },
    email: {
      newMatches: {
        text: 'New Matches',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      newMessages: {
        text: 'Messages',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
      promotions: {
        text: 'Promotions',
        switchProps: {
          checked: insights,
          onPress: () => setInsights(current => !current),
        },
      },
    },
  };

  return <NotificationsTemplate {...props} />;
};
