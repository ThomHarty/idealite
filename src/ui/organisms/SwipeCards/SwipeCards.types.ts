import {ViewStyle} from 'react-native';

import {IUserCardProps} from '../UserCard/UserCard.types';

interface Card {
  id: number;
  cardType: 'user' | 'dummy'; // @TODO: remoave and handle dummy cards internally
  userCardProps?: IUserCardProps; // @TODO: is required
  showSwipeIcons?: boolean; // @TODO: remove when dummy cards are handled internally
}

export interface ISwipeCardsProps {
  topLeftIconOnPress?: (id: number) => void;
  topRightIconOnPress?: (id: number) => void;
  onPress: (id: number) => void;
  onSwipedRight: (id: number) => void;
  onSwipedLeft: (id: number) => void;
  cards: Card[];
  onChangeX: (x: number) => void;
  swipeRight?: boolean;
  swipeLeft?: boolean;
  isLastCard: (value: boolean) => void;
  cardsDisabled?: boolean;
}

export interface SwipeCardsStyles {
  container?: ViewStyle;
  cardsContainer?: ViewStyle;
  card?: ViewStyle;
  content?: ViewStyle;
}
