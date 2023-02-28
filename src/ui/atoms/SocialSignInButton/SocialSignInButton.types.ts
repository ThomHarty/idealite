import {ViewStyle} from 'react-native';

export type Variant = 'Google' | 'Apple' | 'Facebook';

export interface ISocialSignInButtonProps {
  variant: Variant;
  onPress: () => void;
}

export interface SocialSignInButtonStyles {
  container?: ViewStyle;
  svgContainer?: ViewStyle;
}
