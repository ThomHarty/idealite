import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';

export interface ILinearBackgroundProps {
  children: ReactElement | ReactElement[];
  borderRadius?: number;
}

export interface LinearBackgroundStyles {
  container?: ViewStyle;
}
