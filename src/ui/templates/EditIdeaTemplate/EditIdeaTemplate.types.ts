import {ViewStyle} from 'react-native';
import {IInputProps, ITextAreaProps} from '../../atoms';

export interface IEditIdeaTemplateProps {
  onPressBack: () => void;
  onPressUpdate: () => void;
  onPressCancel: () => void;
  input: IInputProps;
  textArea: ITextAreaProps;
}

export interface EditIdeaTemplateStyles {
  container?: ViewStyle;
  inputContainer?: ViewStyle;
  textAreaContainer?: ViewStyle;
  buttonsContainer?: ViewStyle;
  topButtonContainer?: ViewStyle;
}
