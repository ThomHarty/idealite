import {ReactElement} from 'react';
import {TextStyle, ViewStyle} from 'react-native';

export interface IModalProps {
  open: boolean;
  children: ReactElement | ReactElement[];
  onClose: () => void;
}

export interface ModalStyles {
  container?: ViewStyle;
  modalContainer?: ViewStyle;
  iconContainer?: ViewStyle;
  icon?: TextStyle;
}
