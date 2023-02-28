import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IEditLocationTemplateProps {
  onPressUpdate: () => void;
  onPressBack: () => void;
  onPressCancel: () => void;
  location: IInputProps;
}

export interface EditLocationTemplateStyles {
  container?: ViewStyle;
  inputContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
