import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IRecoverPasswordTemplateProps {
  onPressNext: () => void;
  onPressBack: () => void;
  password: IInputProps;
  confirm: IInputProps;
}

export interface RecoverPasswordTemplateStyles {
  container?: ViewStyle;
  buttonContainer?: ViewStyle;
  centerContainer?: ViewStyle;
  headingContainer?: ViewStyle;
  inputContainer?: ViewStyle;
}
