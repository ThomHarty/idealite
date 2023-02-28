import {ViewStyle} from 'react-native';

export interface ISendNDATemplateProps {
  onPressBack: () => void;
  onPressSend: () => void;
  ndaText: string;
}

export interface SendNDATemplateStyles {
  container?: ViewStyle;
  headingContainer?: ViewStyle;
  textContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
