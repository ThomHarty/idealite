import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IChangePasswordTemplateProps {
  onPressUpdate: () => void;
  onPressBack: () => void;
  onPressCancel: () => void;
  oldPassword: IInputProps;
  newPassword: IInputProps;
  confirmNew: IInputProps;
}

export interface ChangePasswordTemplateStyles {
  container?: ViewStyle;
  inputContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
