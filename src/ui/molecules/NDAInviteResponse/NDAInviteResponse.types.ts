import {TextStyle, ViewStyle} from 'react-native';

export interface INDAInviteResponseProps {
  name: string;
  isFromAuthedUser?: boolean;
  status: 'accepted' | 'declined';
}

export interface NDAInviteResponseStyles {
  container?: ViewStyle;
  dividerContainer?: ViewStyle;
  textContainer?: ViewStyle;
  tick?: TextStyle;
  cross?: TextStyle;
}
