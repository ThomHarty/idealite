import React, {ReactElement} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {Icon} from '../../../shared/components';
import {COLORS} from '../../../theme';
import {Typography} from '../../atoms';
import {IconTabs, LikesListItem} from '../../molecules';
import {
  LikesHeader,
  LikesNonPremiumCard,
  RecommendedNonPremiumCard,
} from '../../organisms';
import {IInterestsTemplateProps} from './InterestsTemplate.types';
import {useStyles} from './useStyles';

export const InterestsTemplate = ({
  likes,
  onPressLikes,
  likesSent,
  onPressLikesSent,
  recommended,
  onPressRecommended,
  hasLikesUnread,
  isPremium = false,
  onPressJoinNow,
}: // @TODO: move !ispremium to outside of tabs
IInterestsTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={baseStyles.container}>
        <IconTabs
          interests
          tabOneUnread={hasLikesUnread}
          tabOneContent={
            likes.length > 0 ? (
              <>
                {!isPremium && (
                  <View style={baseStyles.likesNonPremiumContainer}>
                    <LikesNonPremiumCard onPressJoinNow={onPressJoinNow} />
                  </View>
                )}
                <ScrollView
                  scrollEnabled={isPremium}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: 110}}>
                  <LikesHeader heading="Likes" subHeading="This month" />
                  {likes.map((like, i) => {
                    return (
                      <LikesListItem key={i} {...like} onPress={onPressLikes} />
                    );
                  })}
                </ScrollView>
              </>
            ) : (
              <View style={baseStyles.noActivityContainer}>
                <View style={baseStyles.iconContainer}>
                  <Icon name="heart" iconStyles={baseStyles.icon} />
                </View>
                <View style={baseStyles.iconTextContainer}>
                  <Typography
                    text="No activity to show"
                    size="text"
                    color={COLORS.GREY}
                  />
                </View>
              </View>
            )
          }
          tabTwoContent={
            likesSent.length > 0 ? (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}>
                <LikesHeader heading="Likes sent" subHeading="This month" />
                {likesSent.map((like, i) => {
                  return (
                    <LikesListItem
                      key={i}
                      {...like}
                      onPress={onPressLikesSent}
                    />
                  );
                })}
              </ScrollView>
            ) : (
              <View style={baseStyles.noActivityContainer}>
                <View style={baseStyles.iconContainer}>
                  <Icon name="heart" iconStyles={baseStyles.icon} />
                  <Icon name="sent" iconStyles={baseStyles.smallIcon} />
                </View>
                <View style={baseStyles.iconTextContainer}>
                  <Typography
                    text="No activity to show"
                    size="text"
                    color={COLORS.GREY}
                  />
                </View>
              </View>
            )
          }
          tabThreeContent={
            recommended.length > 0 ? (
              <>
                <ScrollView
                  scrollEnabled={isPremium}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: 100}}>
                  <LikesHeader heading="Recommended" />
                  {recommended.map((like, i) => {
                    return (
                      <LikesListItem
                        key={i}
                        {...like}
                        onPress={onPressRecommended}
                      />
                    );
                  })}
                </ScrollView>
                {!isPremium && (
                  <View style={baseStyles.recNonPremiumContainer}>
                    <RecommendedNonPremiumCard
                      onPressJoinNow={onPressJoinNow}
                    />
                  </View>
                )}
              </>
            ) : (
              <View style={baseStyles.noActivityContainer}>
                <View style={baseStyles.iconContainer}>
                  <Icon name="lightbulb" iconStyles={baseStyles.icon} />
                </View>
                <View style={baseStyles.iconTextContainer}>
                  <Typography
                    text="No activity to show"
                    size="text"
                    color={COLORS.GREY}
                  />
                </View>
              </View>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};
