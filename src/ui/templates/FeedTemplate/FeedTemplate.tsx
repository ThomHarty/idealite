import React, { ReactElement, useEffect, useState } from "react";
import { View } from "react-native";
import { cancelAnimation, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { withPause } from "react-native-redash";

import { LinearBackground, Typography } from "../../atoms";
import { LogoHeader, SwipeButtons } from "../../molecules";
import { ISwipeCardProps, SwipeCard } from "../../organisms";
import { IFeedTemplateProps } from "./FeedTemplate.types";
import { useStyles } from "./useStyles";

export const FeedTemplate = ({
  cards,
  onSwipedLeft,
  onSwipedRight,
  firstTime,
}: IFeedTemplateProps): ReactElement => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const active = useSharedValue(false);
  const parentX = useSharedValue(0);

  const baseStyles = useStyles();
  const [swipingRight, setSwipingRight] = useState(false);
  const [swipingLeft, setSwipingLeft] = useState(false);
  const [tick, setTick] = useState("");
  const [cross, setCross] = useState("");

  const [activeCards, setActiveCards] = useState<ISwipeCardProps[]>([]);

  useEffect(() => {
    x.value = withPause(withTiming(1), active);
  }, []);

  const handleSwipingRight = (swiping: boolean) => {
    setSwipingRight(swiping);
  };

  const handleSwipingLeft = (swiping: boolean) => {
    setSwipingLeft(swiping);
  };

  const handleOnPressTick = (name: string) => {
    setTick(name);
    setSwipingRight(true);
  };

  const handleOnPressCross = (name: string) => {
    setCross(name);
    setSwipingLeft(true);
  };

  // console.log("cards length inside template: ", activeCards.length);

  const handleSwipedLeft = () => {
    x.value = withTiming(0, { duration: 0 });
  };

  const handleSwipedRight = () => {
    x.value = withTiming(0, { duration: 0 });
  };

  useEffect(() => {
    setSwipingRight(false);
    setSwipingLeft(false);
  }, [cards]);

  const handleGetParentX = (value: number) => {
    parentX.value = value;
  };

  useEffect(() => {
    // console.log("cards changed");
    setActiveCards(cards);
  }, [cards]);
  
  return (
    <View style={baseStyles.container}>
      <LinearBackground>
        <LogoHeader>
            <View style={baseStyles.wrapper}>
              <View style={baseStyles.cardContainer}>
                  <View style={baseStyles.cardWrapper}>
                  <>
                      {cards.map((card, i) => {
                        if(true) {
                          return (
                            <View key={i}>
                              <SwipeCard
                                {...card}
                                isSwipingRight={(swiping) => handleSwipingRight(swiping)}
                                isSwipingLeft={(swiping) => handleSwipingLeft(swiping)}
                                swipeRight={tick === card.swipeUserInfo.name}
                                swipeLeft={cross === card.swipeUserInfo.name}
                                parentIsSwiping={false}
                                onSwipedLeft={() => {
                                  onSwipedLeft(card.swipeUserInfo.name);
                                  handleSwipedLeft();
                                }}
                                onSwipedRight={() => {
                                  onSwipedRight(card.swipeUserInfo.name);
                                  handleSwipedRight();
                                }}
                                x={x}
                                y={y}
                                active={active}
                                getParentX={handleGetParentX}
                                order={activeCards.length - i}
                              />
                            </View>
                          )
                        }
                      })}
                    </>
                </View>
              </View>
              <View style={baseStyles.buttonsContainer}>
                <SwipeButtons
                  isSwipingRight={swipingRight}
                  isSwipingLeft={swipingLeft}
                  onPressTick={() => {
                    handleOnPressTick(cards[cards.length - 1].swipeUserInfo.name);
                  }}
                  onPressCross={() => {
                    handleOnPressCross(cards[cards.length - 1].swipeUserInfo.name);
                  }}
                  onPressRewind={() => {}}
                  onPressStar={() => {}}
                  disabled={cards.length < 1}
                />
              </View>
            </View>
        </LogoHeader>
      </LinearBackground>
    </View>
  )
};
