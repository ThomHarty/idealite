import {TextStyle, ViewStyle} from 'react-native';

export interface ISelectIdTypeTemplateProps {
  onPressBack: () => void;
  onPressContinue: () => void;
  selected: 'passport' | 'license' | undefined;
  onPressType: (value: 'passport' | 'license') => void;
}

export interface SelectIdTypeTemplateStyles {
  container?: ViewStyle;
  buttonsContainer?: ViewStyle;
  contentContainer?: ViewStyle;
  svgContainer?: ViewStyle;
  svg?: ViewStyle;
  headingContainer?: TextStyle;
}
