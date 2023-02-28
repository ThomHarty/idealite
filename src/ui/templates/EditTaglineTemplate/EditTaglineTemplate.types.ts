import {ViewStyle} from 'react-native';

import {IInputProps} from '../../atoms';

export interface IEditTaglineTemplateProps {
  onPressUpdate: () => void;
  onPressBack: () => void;
  onPressCancel: () => void;
  tagline: IInputProps;
}

export interface EditTaglineTemplateStyles {
  container?: ViewStyle;
  inputContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
