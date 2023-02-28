import {TextStyle, ViewStyle} from 'react-native';

export interface ILikesNonPremiumCardProps {
  onPressJoinNow: () => void;
}

export interface LikesNonPremiumCardStyles {
  container?: ViewStyle;
  cardContainer?: ViewStyle;
  topTextContainer?: TextStyle;
  iconContainer?: ViewStyle;
  headingContainer?: TextStyle;
  subHeadingContainer?: TextStyle;
  infoContainer?: TextStyle;
  bottomContainer?: ViewStyle;
  buttonContainer?: ViewStyle;
  linkContainer?: ViewStyle;
}
