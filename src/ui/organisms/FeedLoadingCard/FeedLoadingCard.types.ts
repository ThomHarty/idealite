import {ViewStyle} from 'react-native';

export interface IFeedLoadingCardProps {
  visible: boolean;
}

export interface FeedLoadingCardStyles {
  container?: ViewStyle;
  cardsContainer?: ViewStyle;
  card?: ViewStyle;
  iconContainer?: ViewStyle;
  handsContainer?: ViewStyle;
  loadingContainer?: ViewStyle;
}
