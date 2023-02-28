import {TextStyle, ViewStyle} from 'react-native';

import {ICodeInputProps, ITextHeaderProps} from '../../molecules';

export interface IOnboardingVerificationTemplateProps {
  header: ITextHeaderProps;
  email: string;
  codeInput: ICodeInputProps;
  onPressResend: () => void;
}

export interface OnboardingVerificationTemplateStyles {
  container?: ViewStyle;
  wrapper?: ViewStyle;
  card?: ViewStyle;
  svgContainer?: ViewStyle;
  headingContainer?: TextStyle;
  infoContainer?: TextStyle;
  emailContainer?: TextStyle;
  codeContainer?: ViewStyle;
  linkContainer?: TextStyle;
}
