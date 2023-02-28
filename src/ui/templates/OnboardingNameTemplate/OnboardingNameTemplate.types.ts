import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IOnboardingNameTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
  name: IInputProps;
}

export interface OnboardingNameTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  inputContainer?: ViewStyle;
}
