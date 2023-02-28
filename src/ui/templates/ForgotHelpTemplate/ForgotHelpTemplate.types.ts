import {ViewStyle} from 'react-native';

export interface IForgotHelpTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
}

export interface ForgotHelpTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  svgContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  infoContainer?: ViewStyle;
}
