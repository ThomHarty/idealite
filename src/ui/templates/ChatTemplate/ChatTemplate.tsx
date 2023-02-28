import React, {ReactElement} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';

import {COLORS} from '../../../theme';
import {
  ChatHeader,
  ChatInputBar,
  NDAInviteResponse,
  ReceivedChatMessage,
  ReceivedNDAMessage,
  SentChatMessage,
  SentNDAMessage,
} from '../../molecules';
import {IChatTemplateProps, IMessage} from './ChatTemplate.types';
import {useStyles} from './useStyles';

export const ChatTemplate = ({
  chatInputBar,
  chatHeader,
  messages,
  onPressNDAMessage,
}: IChatTemplateProps): ReactElement => {
  const baseStyles = useStyles();

  console.log('messages: ', messages);

  // @TODO: add keyboard avoiding view
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: COLORS.WHITE}} />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
        <View style={baseStyles.container}>
          <View style={baseStyles.chatHeaderContainer}>
            <ChatHeader {...chatHeader} />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            inverted
            style={{flex: 1}}
            contentContainerStyle={baseStyles.flatListContainer}
            data={messages}
            renderItem={({item, index}) => {
              return (
                <View style={baseStyles.messageContainer}>
                  {/* chat message */}
                  {item.messageType === 'chat' && item.chatMessage && (
                    <>
                      {item.delivery === 'sent' ? (
                        <SentChatMessage
                          {...item.chatMessage!}
                          readTime={
                            index === 0 ? item.chatMessage.readTime : undefined
                          }
                        />
                      ) : (
                        <ReceivedChatMessage {...item.chatMessage} />
                      )}
                    </>
                  )}
                  {/* nda message */}
                  {item.messageType === 'nda' && item.ndaMessage && (
                    <>
                      {item.delivery === 'sent' ? (
                        <SentNDAMessage
                          {...item.ndaMessage}
                          onPress={() =>
                            onPressNDAMessage(item.ndaMessage!.id!)
                          }
                          readTime={
                            index === 0 ? item.ndaMessage.readTime : undefined
                          }
                        />
                      ) : (
                        <ReceivedNDAMessage
                          {...item.ndaMessage}
                          onPress={() =>
                            onPressNDAMessage(item.ndaMessage!.id!)
                          }
                        />
                      )}
                    </>
                  )}
                  {/* nda response message */}
                  {item.messageType === 'ndaResponse' &&
                    item.ndaResponseMessage && (
                      <NDAInviteResponse {...item.ndaResponseMessage} />
                    )}
                </View>
              );
            }}
            keyExtractor={(item: IMessage) => item.id}
          />
        </View>
        <View style={baseStyles.inputBarContainer}>
          <ChatInputBar {...chatInputBar} />
        </View>
      </SafeAreaView>
    </>
  );
};
