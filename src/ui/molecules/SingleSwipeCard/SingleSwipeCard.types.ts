import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';

export interface ISingleSwipeCardProps {
  children: ReactElement | ReactElement[];
  onSwiped: () => void;
  opacity?: number;
  visible?: boolean;
}

export interface SingleSwipeCardStyles {
  container?: ViewStyle;
  cardsContainer?: ViewStyle;
  card?: ViewStyle;
  content?: ViewStyle;
}
