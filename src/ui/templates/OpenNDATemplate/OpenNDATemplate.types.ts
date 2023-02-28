import {ViewStyle} from 'react-native';

export interface IOpenNDATemplateProps {
  onPressBack: () => void;
  onPressAccept: () => void;
  onPressDecline: () => void;
  ndaText: string;
}

export interface OpenNDATemplateStyles {
  container?: ViewStyle;
  headingContainer?: ViewStyle;
  textContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
