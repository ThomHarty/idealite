import React, { ReactElement, useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

import { Icon } from "../../../shared/components";
import { MatchBG } from "../../../theme/svg";
import { Button, Image, LinearBackground, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { IMatchSuccessProps } from "./MatchSuccess.types";

import { useStyles } from "./useStyles";

export const MatchSuccess = ({
    onPressSendMessage,
    onPressKeepSwiping,
    authAvatar,
    otherUser,
    visible,
}: IMatchSuccessProps): ReactElement => {
    const baseStyles = useStyles();
    const { height } = useWindowDimensions();

    const y = useSharedValue(height + 100);
    const bgScale = useSharedValue(1.1);

    useEffect(() => {
        bgScale.value = withRepeat(withTiming(1.2), -1, true);
    }, []);

    useEffect(() => {
        if(visible) {
            y.value = withTiming(0, { duration: 250 });
        } else {
            y.value = withTiming(height + 100, { duration: 250 });
        };
    }, [visible]);

    const containerStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: y.value }],
        };
    });

    const bgStyles = useAnimatedStyle(() => {
        return {
            transform: [{ scale: bgScale.value }],
        };
    });

    return (
        <Animated.View style={[baseStyles.container, containerStyles]}>
            <LinearBackground>
                <LogoHeader>
                    {/* bg */}
                    <View style={baseStyles.bgContainer}>
                        <Animated.View style={bgStyles}>
                            <MatchBG />
                        </Animated.View>
                    </View>
                    <View style={baseStyles.wrapper}>
                        {/* card */}
                        <View style={baseStyles.cardContainer}>
                            <View style={baseStyles.card}>
                                {/* heading */}
                                <View style={baseStyles.headingContainer}>
                                    <Typography text="It's a match!" size="heading2" />
                                </View>
                                {/* info */}
                                <View style={baseStyles.infoContainer}>
                                    <Typography
                                        size="tiny"
                                        text={`You and ${otherUser.name} are a match`}
                                    />
                                </View>
                                {/* avatars */}
                                <View style={baseStyles.avatarsContainer}>
                                    <Image size="avatarLarge" src={authAvatar} />
                                    {/* tick */}
                                    <View style={baseStyles.tickContainer}>
                                        <Icon name="tick" iconStyles={baseStyles.tick} />
                                    </View>
                                    <Image size="avatarLarge" src={otherUser.avatar} />
                                </View>
                            </View>
                        </View>
                        {/* buttons */}
                        <View style={baseStyles.buttonsContainer}>
                            <View style={baseStyles.firstButtonContainer}>
                                <Button text="Send message" onPress={onPressSendMessage} />
                            </View>
                            <Button text="Keep swiping" onPress={onPressKeepSwiping} variant="secondary" />
                        </View>
                    </View>
                </LogoHeader>
            </LinearBackground>
        </Animated.View>
    );
};
