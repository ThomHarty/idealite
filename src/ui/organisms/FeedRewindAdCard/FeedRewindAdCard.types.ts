import {TextStyle, ViewStyle} from 'react-native';

export interface IFeedRewindAdCardProps {
  onPressJoin: () => void;
  onPressNo: () => void;
}

export interface FeedRewindAdCardStyles {
  container?: ViewStyle;
  topTextContainer?: TextStyle;
  iconContainer?: ViewStyle;
  headingContainer?: TextStyle;
  subHeadingContainer?: TextStyle;
  infoContainer?: TextStyle;
  bottomContainer?: ViewStyle;
  buttonContainer?: ViewStyle;
  linkContainer?: ViewStyle;
}
