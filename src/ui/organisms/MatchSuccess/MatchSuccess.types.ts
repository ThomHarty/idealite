import {TextStyle, ViewStyle} from 'react-native';

export interface IMatchSuccessProps {
  onPressSendMessage: () => void;
  onPressKeepSwiping: () => void;
  authAvatar: string;
  otherUser: {
    name: string;
    avatar: string;
  };
  visible: boolean;
}

export interface MatchSuccessStyles {
  container?: ViewStyle;
  bgContainer?: ViewStyle;
  wrapper?: ViewStyle;
  cardContainer?: ViewStyle;
  card?: ViewStyle;
  headingContainer?: ViewStyle;
  infoContainer?: ViewStyle;
  avatarsContainer?: ViewStyle;
  tickContainer?: ViewStyle;
  tick?: TextStyle;
  buttonsContainer?: ViewStyle;
  firstButtonContainer?: ViewStyle;
}
