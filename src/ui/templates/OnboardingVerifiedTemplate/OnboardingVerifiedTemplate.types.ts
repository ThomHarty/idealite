import {TextStyle, ViewStyle} from 'react-native';

export interface IOnboardingVerifiedTemplateProps {
  onPressNext: () => void;
}

export interface OnboardingVerifiedTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  card?: ViewStyle;
  svgContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  icon?: TextStyle;
  textContainer?: TextStyle;
}
