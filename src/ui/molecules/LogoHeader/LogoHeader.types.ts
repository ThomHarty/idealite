import {ReactElement} from 'react';
import {ViewStyle, TextStyle} from 'react-native';

export interface ILogoHeaderProps {
  children: ReactElement | ReactElement[];
  onPressBack?: () => void;
}

export interface LogoHeaderStyles {
  container?: ViewStyle;
  chevronContainer?: ViewStyle;
  chevron?: TextStyle;
  logoContainer?: ViewStyle;
  sideContainer?: ViewStyle;
}
