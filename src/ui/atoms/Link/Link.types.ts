import {TextStyle, ViewStyle} from 'react-native';

export interface ILinkProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export type LinkStyles = {
  wrapper?: ViewStyle;
  text?: TextStyle;
};
