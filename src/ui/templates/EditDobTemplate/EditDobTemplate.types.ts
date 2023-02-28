import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IEditDobTemplateProps {
  onPressSave: () => void;
  onPressBack: () => void;
  onPressCancel: () => void;
  day: IInputProps;
  month: IInputProps;
  year: IInputProps;
}

export interface EditDobTemplateStyles {
  container?: ViewStyle;
  inputContainer?: ViewStyle;
  ddContainer?: ViewStyle;
  mmContainer?: ViewStyle;
  yyyyContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
