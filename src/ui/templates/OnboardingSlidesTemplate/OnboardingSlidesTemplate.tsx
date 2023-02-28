import React, { memo, ReactElement, useCallback, useState } from "react";
import { SafeAreaView, View } from "react-native";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { COLORS } from "../../../theme";

import { CarouselOne } from "../../../theme/svg";
import { Button, LinearBackground, Link, Typography } from "../../atoms";
import { Carousel, LogoHeader } from "../../molecules";

import { IOnboardingSlidesTemplateProps } from "./OnboardingSlidesTemplate.types";
import { useStyles } from "./useStyles";

export const OnboardingSlidesTemplate = memo(({
    handleSkip,
    handleGetStarted,
    slidesText,
}: IOnboardingSlidesTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [activeSlide, setActiveSlide] = useState<number>(1);

    const handleSlideChanged = useCallback((slide: number) => {
        setActiveSlide(slide);
    }, []);

    const handleButtonOnPress = useCallback(() => {
        if(activeSlide !== 3) {
            setActiveSlide(current => current + 1)
        };
    }, [activeSlide]);

    const getSvg = useCallback((): ReactElement => {
        return (
            <View style={baseStyles.svgContainer}>
                <CarouselOne />
            </View>
        );
    }, []);

    const getText = useCallback((i: number): ReactElement => {
        return (
            <View style={baseStyles.textContainer}>
                <Animated.View
                    style={baseStyles.headingContainer}
                    entering={FadeInDown}
                    exiting={FadeOutUp}
                >
                    <Typography
                        size="heading1"
                        text={slidesText[i].heading}
                    />
                </Animated.View>
                <Animated.View
                    entering={FadeInDown}
                    exiting={FadeOutUp}
                >
                    <Typography
                        size="text"
                        text={slidesText[i].text}
                        lineHeight={24}
                    />
                </Animated.View>
            </View>
        );
    }, []);

    return (
        <View style={baseStyles.container}>
            <LinearBackground>
                <LogoHeader onPressBack={
                    activeSlide !== 1 ? () => setActiveSlide(current => current - 1) : undefined
                }>
                    <View>
                        <View style={baseStyles.carouselContainer}>
                            <Carousel
                                items={[
                                    { content: getSvg() },
                                    { content: getSvg() },
                                    { content: getSvg() },
                                ]}
                                current={activeSlide}
                                onActiveSlideChanged={handleSlideChanged}  
                            />
                        </View>
                        {activeSlide === 1 && getText(0)}
                        {activeSlide === 2 && getText(1)}
                        {activeSlide === 3 && getText(2)}
                    </View>
                    <View style={baseStyles.ctaContainer}>
                        <Button
                            text={activeSlide === 3 ? "Get Started" : "Next"}
                            onPress={activeSlide === 3 ?
                                handleGetStarted :
                                handleButtonOnPress
                            }
                        />
                        <View style={baseStyles.linkContainer}>
                            <Link text="Skip" onPress={handleSkip} />
                        </View>
                    </View>
                </LogoHeader>
            </LinearBackground>
        </View>
    );
});
