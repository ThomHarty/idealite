import React, {memo, ReactElement, useCallback, useRef, useState} from 'react';
import {Pressable, useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {IIconTabsProps, TabNumbers} from './IconTabs.types';
import {ActiveBar, TabIcon} from '../../atoms';
import {useStyles} from './useStyles';

export const IconTabs = memo(
  ({
    initial,
    tabOneContent,
    tabOneUnread,
    tabTwoContent,
    tabTwoUnread,
    tabThreeContent,
    interests = false,
    onTabChanged,
  }: IIconTabsProps): ReactElement => {
    const {width} = useWindowDimensions();
    const scrollRef = useRef<ScrollView | null>(null);
    const [active, setActive] = useState(initial || 1);
    const baseStyles = useStyles();

    const handleChangeTab = useCallback((tab: TabNumbers) => {
      onTabChanged && onTabChanged(tab);
      setActive(tab);
      let x;
      switch (tab) {
        case 1:
          x = 0;
          break;
        case 2:
          x = width;
          break;
        case 3:
          x = width * 2;
          break;
      }
      scrollRef?.current?.scrollTo({x});
    }, []);

    return (
      <>
        <View style={baseStyles.container}>
          <Pressable
            onPress={() => handleChangeTab(1)}
            style={baseStyles.tabContainer}>
            <TabIcon
              icon={interests ? 'heart' : 'speech-bold'}
              unread={tabOneUnread}
              active={active === 1}
            />
            <ActiveBar active={active === 1} />
          </Pressable>
          <Pressable
            onPress={() => handleChangeTab(2)}
            style={baseStyles.tabContainer}>
            <TabIcon
              icon={interests ? 'heart' : 'swipe'}
              isLikesSent={interests}
              unread={tabTwoUnread}
              active={active === 2}
            />
            <ActiveBar active={active === 2} />
          </Pressable>
          <Pressable
            onPress={() => handleChangeTab(3)}
            style={baseStyles.tabContainer}>
            <TabIcon
              icon={interests ? 'lightbulb' : 'star'}
              active={active === 3}
            />
            <ActiveBar active={active === 3} />
          </Pressable>
        </View>
        <ScrollView horizontal scrollEnabled={false} ref={scrollRef}>
          <View style={baseStyles.contentContainer}>
            <View style={baseStyles.contentTabContainer}>{tabOneContent}</View>
            <View style={baseStyles.contentTabContainer}>{tabTwoContent}</View>
            <View style={baseStyles.contentTabContainer}>
              {tabThreeContent}
            </View>
          </View>
        </ScrollView>
      </>
    );
  },
);
