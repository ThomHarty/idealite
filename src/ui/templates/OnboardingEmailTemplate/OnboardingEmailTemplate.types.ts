import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IOnboardingEmailTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
  email: IInputProps;
}

export interface OnboardingEmailTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  inputContainer?: ViewStyle;
}
