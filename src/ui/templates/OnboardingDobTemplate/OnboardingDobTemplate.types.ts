import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IOnboardingDobTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
  day: IInputProps;
  month: IInputProps;
  year: IInputProps;
}

export interface OnboardingDobTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  inputContainer?: ViewStyle;
  ddContainer?: ViewStyle;
  mmContainer?: ViewStyle;
  yyyyContainer?: ViewStyle;
}
