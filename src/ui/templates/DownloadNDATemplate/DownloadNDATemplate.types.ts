import {ViewStyle} from 'react-native';

export interface IDownloadNDATemplateProps {
  onPressBack: () => void;
  onPressDownload: () => void;
  ndaText: string;
}

export interface DownloadNDATemplateStyles {
  container?: ViewStyle;
  headingContainer?: ViewStyle;
  textContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
