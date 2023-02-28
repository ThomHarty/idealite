import React, { memo, ReactElement, useEffect, useState } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { Extrapolation, interpolate, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { COLORS } from "../../../theme";
import { SwipeIcons } from "../../molecules";
import { UserCard } from "../UserCard/UserCard";
import { ISwipeCardsProps } from "./SwipeCards.types";
import { useStyles } from "./useStyles";

export const SwipeCards = memo(({
    cards,
    topLeftIconOnPress,
    topRightIconOnPress,
    onPress,
    onSwipedRight,
    onSwipedLeft,
    onChangeX,
    swipeRight,
    swipeLeft,
    isLastCard,
    cardsDisabled,
}: ISwipeCardsProps): ReactElement => {
    const baseStyles = useStyles();
    const { width } = useWindowDimensions();
    const SNAP_POINTS = [-width - 100, 0, width + 100];

    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const angle = useSharedValue(0);

    const iconOpacity = useSharedValue(1);
    const tickOpacity = useSharedValue(0);
    const crossOpacity = useSharedValue(0);

    const [cardsLength, setCardsLength] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const handleActiveIndex = () => {
        setTimeout(() => {
            // handle dummy cards here *******************************
            setActiveIndex(current => current + 1);

            x.value = 0;
            y.value = 0;
        }, 100);

        setTimeout(() => {
            if(activeIndex < (cardsLength - 5)) {
                setDisabled(false);
                setNextIndex(current => current + 1);
            } else {
                isLastCard(true);
            };
        }, 500);
    };

    const gesture = Gesture.Pan()
        .enabled(!disabled && !cardsDisabled)
        .onBegin(() => {
            iconOpacity.value = withTiming(0, { duration: 250 });
        })
        .onChange(({translationX, translationY}) => {
            x.value = translationX;
            y.value = translationY;
            angle.value = translationX / 20;
            iconOpacity.value = withTiming(0, { duration: 250 });
            if(translationX > 6) {
                tickOpacity.value = withTiming(1, { duration: 500 });
                runOnJS(onChangeX)(2);
            };
            if(translationX < 0) {
                tickOpacity.value = withTiming(0, { duration: 250 });
            };
            if(translationX < -6) {
                crossOpacity.value = withTiming(1, { duration: 500 });
                runOnJS(onChangeX)(1);
            };
            if(translationX > 0) {
                crossOpacity.value = withTiming(0, { duration: 250 });
            };
        })
        .onEnd(({velocityX}) => {
            runOnJS(onChangeX)(0);
            tickOpacity.value = withTiming(0, { duration: 250 });
            crossOpacity.value = withTiming(0, { duration: 250 });
            const dest = snapPoint(x.value, velocityX, SNAP_POINTS);
            x.value = withSpring(dest, { velocity: velocityX });
            y.value = withSpring(0, { velocity: velocityX });
            angle.value = withTiming(0, { duration: 100 });
            if(dest !== 0) {
                runOnJS(setDisabled)(true);
                runOnJS(handleActiveIndex)();
            };
            if(dest > 0) runOnJS(onSwipedRight)(cards[activeIndex].id);
            if(dest < 0) runOnJS(onSwipedLeft)(cards[activeIndex].id);
            if(dest === 0) {
                iconOpacity.value = withTiming(1, { duration: 250 });
                tickOpacity.value = withTiming(0, { duration: 250 });
                crossOpacity.value = withTiming(0, { duration: 250 });
            };
        })
        .onFinalize(() => {
            iconOpacity.value = withTiming(1, { duration: 250 });
        });
    
    const getColorValues = (index: number) => {
        let lowColor, highColor;
        if(index === activeIndex) {
            lowColor = COLORS.WHITE;
            highColor = COLORS.WHITE;
        } else if(index === (activeIndex + 1)) {
            lowColor = COLORS.CARD_TWO;
            highColor = COLORS.WHITE;
        } else if(index === (activeIndex + 2)) {
            lowColor = COLORS.CARD_THREE;
            highColor = COLORS.CARD_TWO;
        } else {
            lowColor = COLORS.ACCENT_ONE;
            highColor = COLORS.CARD_THREE;
        };

        return { lowColor, highColor };
    };
    
    const getScaleValues = (index: number) => {
        const removeScale = ((index - activeIndex) / 10) / 4;
        let lowScale = 1 - (removeScale * 2);
        let highScale = index === (activeIndex + 1) ? 1 : (1 - removeScale);

        if(index === (activeIndex + 3)) {
            lowScale = 0.9
            highScale = 0.9;
        };

        return { lowScale, highScale };
    };
    
    const getChildCardStyle = (index: number) => {
        const { lowColor, highColor } = getColorValues(index);
        const { lowScale, highScale } = getScaleValues(index);

        const childCardStyle = useAnimatedStyle(() => {    
            let translateY, scale, backgroundColor;
            const temp = Math.abs((x.value / 1.5));

            scale = interpolate(temp, [0, 25], [lowScale, highScale], {
                extrapolateRight: Extrapolation.CLAMP,
            });

            backgroundColor = interpolateColor(temp, [0, 25],
                [lowColor, highColor],
            );
    
            if(x.value !== 0) {
                if((temp < 25)) {
                    translateY = withTiming(-temp, { duration: 1 });
                } else {
                    translateY = withTiming(-25, { duration: 1 });
                };
            } else {
                translateY = 0;
            };

            if(index === (activeIndex + 3)) {
                translateY = 0;
            };

            return {
                transform: [{ translateY }, { scale }],
                backgroundColor,
            };
        });

        return childCardStyle;
    };
        
    const cardOneStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: x.value },
                { translateY: y.value },
                {rotateZ: `${angle.value}deg`},
            ],
        };
    });
    
    const getStyles = (index: number) => {
        let styles = {};
        if(activeIndex === index) styles = cardOneStyle;

        if(activeIndex < index) styles = getChildCardStyle(index);

        if(activeIndex > index) styles = { opacity: 0 };

        return styles;
    };

    const iconStyle = useAnimatedStyle(() => {
        return { opacity: iconOpacity.value };
    });

    const tickStyle = useAnimatedStyle(() => {
        return { opacity: tickOpacity.value };
    });

    const crossStyle = useAnimatedStyle(() => {
        return { opacity: crossOpacity.value };
    });

    const _handleButtonSwipeRight = () => {
        x.value = withSpring(width + 100, { velocity: 1 });
        setDisabled(true);
        handleActiveIndex();
        onSwipedRight(cards[activeIndex].id);
    };

    const _handleButtonSwipeLeft = () => {
        x.value = withSpring(-width - 100, { velocity: 1 });
        setDisabled(true);
        handleActiveIndex();
        onSwipedLeft(cards[activeIndex].id);
    };

    useEffect(() => {
        setCardsLength(cards.length);
        if(activeIndex > (cards.length - 5)) {
            isLastCard(false);
        };
    }, [cards]);

    useEffect(() => {
        if(activeIndex < (cardsLength - 4)) {
            if(swipeRight) _handleButtonSwipeRight();
            if(swipeLeft) _handleButtonSwipeLeft();
        };
    }, [swipeRight, swipeLeft]);


    return (
        <>
        <Pressable style={[
                baseStyles.container,
                disabled && { opacity: 0 },
            ]}
            onPress={() => onPress(cards[activeIndex].id)}
        >
            <GestureDetector gesture={gesture}>
                <View style={baseStyles.cardsContainer}>
                    {cards.map((card, i) => {
                        if(i < (activeIndex + 4)) {
                            return (
                                <Animated.View key={i} style={[
                                    baseStyles.card,
                                    { zIndex: cardsLength - i },
                                    activeIndex === i && {
                                        transform: [{ scale: 1 }],
                                        backgroundColor: COLORS.WHITE,
                                        top: 0,
                                    },
                                    activeIndex === (i - 1) && {
                                        transform: [{ scale: 0.95 }],
                                        backgroundColor: COLORS.CARD_TWO,
                                        top: 25,
                                    },
                                    activeIndex === (i - 2) && {
                                        transform: [{ scale: 0.9 }],
                                        backgroundColor: COLORS.CARD_THREE,
                                        top: 50,
                                    },
                                    activeIndex === (i - 3) && {
                                        transform: [{ scale: 0.9 }],
                                        backgroundColor: COLORS.ACCENT_ONE,
                                        top: 50,
                                    },
                                    activeIndex > i && {
                                        opacity: 0,
                                    },
                                    getStyles(i),
                                ]}>
                                    <SwipeIcons
                                        leftOnPress={topLeftIconOnPress ? () => topLeftIconOnPress(card.id) : undefined}
                                        rightOnPress={topRightIconOnPress ? () => topRightIconOnPress(card.id) : undefined}
                                        showSwipeIcons={!card.showSwipeIcons || true}
                                        iconStyle={activeIndex === i ? iconStyle : { opacity: 1 }}
                                        tickStyle={activeIndex === i ? tickStyle : { opacity: 0 }}
                                        crossStyle={activeIndex === i ? crossStyle : { opacity: 0 }}
                                    />
                                    {card.cardType === "user" && (
                                        <UserCard {...card.userCardProps!} />
                                    )}
                                </Animated.View>
                            )
                        }
                    })}
                </View>
            </GestureDetector>
        </Pressable>
        {disabled && (
            <View style={baseStyles.container}>
                <View style={baseStyles.cardsContainer}>
                    {/*  */}
                    <View style={[
                            baseStyles.card,
                            {
                                transform: [{ scale: 0.9 }],
                                backgroundColor: COLORS.CARD_THREE,
                                top: 50,
                                shadowOpacity: 0.2
                            },
                        ]}
                    />
                    {/*  */}
                    <View style={[
                            baseStyles.card,
                            {
                                transform: [{ scale: 0.95 }],
                                backgroundColor: COLORS.CARD_TWO,
                                top: 25,
                            },
                        ]}
                    />
                    {/*  */}
                    <View style={baseStyles.card}>
                        <SwipeIcons
                            leftOnPress={topLeftIconOnPress ? () => topLeftIconOnPress(cards[nextIndex].id) : undefined}
                            rightOnPress={topRightIconOnPress ? () => topRightIconOnPress(cards[nextIndex].id) : undefined}
                            showSwipeIcons={false}
                            iconStyle={{ opacity: 1 }}
                        />
                        {cards[nextIndex].cardType === "user" && (
                            <UserCard {...cards[nextIndex].userCardProps!} />
                        )}
                    </View>
                </View>
            </View>
        )}
        </>
    );
});
