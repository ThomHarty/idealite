import React, {memo, ReactElement, useCallback} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Icon} from '../../../shared/components';
import {COLORS} from '../../../theme';
import {Typography} from '../../atoms';

import {IconTabs} from '../../molecules';
import {LikesHeader, MessagesListItem} from '../../organisms';
import {IMessagesTemplateProps} from './MessagesTemplate.types';
import {useStyles} from './useStyles';

export const MessagesTemplate = memo(
  ({
    conversations,
    onPressConversation,
    isPremium = false,
  }: IMessagesTemplateProps): ReactElement => {
    const baseStyles = useStyles();

    const _onTabChanged = useCallback((tab: number) => {
      // console.log("tab changed to number: ", tab);
    }, []);

    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <View style={baseStyles.container}>
          <IconTabs
            onTabChanged={_onTabChanged}
            tabOneContent={
              conversations.length > 0 ? (
                <View style={baseStyles.conversationsContainer}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 100}}>
                    <LikesHeader heading="Conversations" />
                    {conversations.map((conversation, i) => {
                      return (
                        <MessagesListItem
                          key={i}
                          {...conversation}
                          onPress={onPressConversation}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              ) : (
                <View style={baseStyles.noActivityContainer}>
                  <View style={baseStyles.iconContainer}>
                    <Icon
                      name="speech"
                      iconStyles={baseStyles.noActivityIcon}
                    />
                  </View>
                  <View style={baseStyles.iconTextContainer}>
                    <Typography
                      text="No messages to show"
                      size="text"
                      color={COLORS.GREY}
                    />
                  </View>
                </View>
              )
            }
            tabTwoContent={<></>}
            tabThreeContent={<></>}
          />
        </View>
        <View style={baseStyles.ctaContainer}>
          <View style={baseStyles.ctaIconContainer}>
            <Icon name="cloud" iconStyles={baseStyles.icon} />
          </View>
          <View style={baseStyles.ctaTextContainer}>
            <Typography text="See who else matched with you" size="small" />
          </View>
        </View>
      </SafeAreaView>
    );
  },
);
