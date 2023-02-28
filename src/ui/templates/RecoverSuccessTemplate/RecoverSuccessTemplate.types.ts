import {TextStyle, ViewStyle} from 'react-native';

export interface IRecoverSuccessTemplateProps {
  onPressNext: () => void;
}

export interface RecoverSuccessTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  icon?: TextStyle;
  textContainer?: TextStyle;
}
