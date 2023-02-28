import React, { memo, ReactElement } from "react";
import { useWindowDimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

import { ISlideProps } from "./Slide.types";
import { useStyles } from "./useStyles";

export const Slide = memo(({
    startValue,
    handleOnChange,
}: ISlideProps): ReactElement => {
    const { width } = useWindowDimensions();
    const baseStyles = useStyles();

    const sliderWidth = width - 94;

    const start = useSharedValue((startValue * sliderWidth) / 100);
    const offset = useSharedValue((startValue * sliderWidth) / 100);

    const gesture = Gesture.Pan()
        .onChange(({translationX}) => {
            const x = start.value + translationX;
            if((x > 0) && (x < sliderWidth)) {
                offset.value = x;
            };

            const value = Math.round((offset.value / sliderWidth) * 100);
            runOnJS(handleOnChange)(value);
        })
        .onEnd(() => {
            start.value = offset.value;
        });

    const styles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <View style={baseStyles.container}>
                {/* left vr */}
                <View style={baseStyles.leftVr} />
                {/* hr */}
                <View style={baseStyles.hr} />
                {/* tracker */}
                <Animated.View style={[
                    baseStyles.tracker,
                    styles,
                ]} />
                {/* right vr */}
                <View style={baseStyles.rightVr} />
            </View>
        </GestureDetector>
    );
});
