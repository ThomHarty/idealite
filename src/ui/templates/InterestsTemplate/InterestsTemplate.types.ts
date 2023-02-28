import {TextStyle, ViewStyle} from 'react-native';

import {ILikesListItemProps} from '../../molecules';

export interface IInterestsTemplateProps {
  likes: Omit<ILikesListItemProps, 'onPress'>[];
  hasLikesUnread?: boolean;
  onPressLikes: (id: number) => void;
  likesSent: Omit<ILikesListItemProps, 'onPress'>[];
  onPressLikesSent: (id: number) => void;
  recommended: Omit<ILikesListItemProps, 'onPress'>[];
  onPressRecommended: (id: number) => void;
  isPremium?: boolean;
  onPressJoinNow: () => void;
}

export interface InterestsTemplateStyles {
  container?: ViewStyle;
  headingContainer?: ViewStyle;
  subHeadingContainer?: ViewStyle;
  likesNonPremiumContainer?: ViewStyle;
  recNonPremiumContainer?: ViewStyle;
  noActivityContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  icon?: TextStyle;
  smallIcon?: TextStyle;
  iconTextContainer?: TextStyle;
}
