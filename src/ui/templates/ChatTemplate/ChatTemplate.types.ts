import {ViewStyle} from 'react-native';

import {
  IChatHeaderProps,
  IChatInputBarProps,
  INDAInviteResponseProps,
  IReceivedChatMessageProps,
  IReceivedNDAMessageProps,
  ISentChatMessageProps,
  ISentNDAMessageProps,
} from '../../molecules';

export interface IMessage {
  id: string;
  messageType: 'chat' | 'nda' | 'ndaResponse';
  delivery: 'sent' | 'received';
  chatMessage?: IReceivedChatMessageProps | ISentChatMessageProps;
  ndaMessage?:
    | Omit<IReceivedNDAMessageProps, 'onPress'>
    | Omit<ISentNDAMessageProps, 'onPress'>;
  ndaResponseMessage?: INDAInviteResponseProps;
}

export interface IChatTemplateProps {
  chatInputBar: IChatInputBarProps;
  chatHeader: IChatHeaderProps;
  messages: IMessage[];
  onPressNDAMessage: (id: string) => void;
}

export interface ChatTemplateStyles {
  container?: ViewStyle;
  inputBarContainer?: ViewStyle;
  chatHeaderContainer?: ViewStyle;
  messageContainer?: ViewStyle;
  flatListContainer?: ViewStyle;
}
