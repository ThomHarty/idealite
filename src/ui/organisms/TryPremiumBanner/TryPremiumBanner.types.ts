import {TextStyle, ViewStyle} from 'react-native';

export interface ITryPremiumBannerProps {
  onPress: () => void;
}

export interface TryPremiumBannerStyles {
  container?: ViewStyle;
  contentContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  iconButtonContainer?: ViewStyle;
  sharedIcon?: TextStyle;
  icon?: ViewStyle;
  textContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  infoContainer?: ViewStyle;
}
