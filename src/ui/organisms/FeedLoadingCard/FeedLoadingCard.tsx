import React, { ReactElement, useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

import { Icon, Loading } from "../../../theme/svg";
import { IFeedLoadingCardProps } from "./FeedLoadingCard.types";
import { useStyles } from "./useStyles";

export const FeedLoadingCard = ({
    visible,
}: IFeedLoadingCardProps): ReactElement => {
    const { height } = useWindowDimensions();
    const baseStyles = useStyles();
    const handsScale = useSharedValue(1);
    const loadingScale = useSharedValue(1);
    const y = useSharedValue(-height - 100);

    useEffect(() => {
        handsScale.value = withRepeat(withTiming(1.03), -1, true);
        loadingScale.value = withRepeat(withTiming(1.06), -1, true);
    }, []);

    useEffect(() => {
        if(visible) {
            y.value = withTiming(0, { duration: 250 });
        } else {
            y.value = withTiming(-height - 100, { duration: 450 });
        };
    }, [visible]);

    const containerStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: y.value }],
        };
    });

    const handsStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: handsScale.value }],
        };
    });

    const loadingStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: loadingScale.value }],
        };
    });
    
    return (
        <>
        <Animated.View
            style={[
                baseStyles.container,
                containerStyles,
            ]}
        >
            <View style={baseStyles.cardsContainer}>
                <View style={baseStyles.card}>
                    <View style={baseStyles.iconContainer}>
                        <Animated.View style={[
                            baseStyles.handsContainer,
                            handsStyles,
                        ]}>
                            <Icon />
                        </Animated.View>
                        <Animated.View style={[
                            baseStyles.loadingContainer,
                            loadingStyles,
                        ]}>
                            <Loading />
                        </Animated.View>
                    </View>
                </View>
            </View>
        </Animated.View>
        </>
    );
};
