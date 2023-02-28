import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar, View } from "react-native";

import { LinearBackground } from "../../atoms";
import { ISwipeButtonsProps, LogoHeader, SingleSwipeCard, SwipeButtons } from "../../molecules";
import { FeedInstructionsCard, FeedLoadingCard, FeedNoUsersCard, FeedRewindAdCard, FeedWelcomeCard, MatchSuccess, SwipeCards } from "../../organisms";
import { IFeedV2TemplateProps } from "./FeedV2Template.types";
import { useStyles } from "./useStyles";

export const FeedV2Template = ({
    showIntroCards,
    onIntroFinished,
    swipeCards,
    lastCardReached, // @TODO: handle this
    loading = false,
    showRewindAdCard,
    rewindAdCard,
    onRewindAdCardSwiped,
    showNoUsersCard = false, // @TODO: handle this
    matchSuccess,
}: IFeedV2TemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [cardX, setCardX] = useState(0);
    const [pressCross, setPressCross] = useState(false);
    const [pressTick, setPressTick] = useState(false);
    const [isLastCard, setIsLastCard] = useState(false);

    const [showWelcome, setShowWelcome] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    const _handleOnPressCross = useCallback(() => {
        setPressCross(true);
        setTimeout(() => {
            setPressCross(false);
        }, 10);
    }, []);

    const _handleOnPressTick = useCallback(() => {
        setPressTick(true);
        setTimeout(() => {
            setPressTick(false);
        }, 10);
    }, []);

    const _handleIsLastCard = useCallback((value: boolean) => {
        setIsLastCard(value);
        lastCardReached();
    }, []);

    const _onChangeX = useCallback((x: number) => {
        setCardX(x);
    }, []);

    const _onWelcomeSwiped = useCallback(() => {
        setShowInstructions(true);
        setTimeout(() => setShowWelcome(false), 200);
    }, []);

    const _onInstructionsSwiped = useCallback(() => {
        setTimeout(() => {
            setShowInstructions(false);
            onIntroFinished!();
        }, 200);
    }, []);

    const _onRewindAdCardSwiped = useCallback(() => {
        onRewindAdCardSwiped!();
    }, []);

    const swipeButtons: ISwipeButtonsProps = {
        onPressRewind: () => console.log("rewind pressed"),
        onPressCross: _handleOnPressCross,
        onPressTick: _handleOnPressTick,
        onPressStar: () => console.log("star pressed"),
        isSwipingLeft: cardX === 1 || pressCross,
        isSwipingRight: cardX === 2 || pressTick,
    };

    useEffect(() => {
        if(showIntroCards && onIntroFinished) setShowWelcome(true);
    }, [showIntroCards, onIntroFinished]);

    return (
        <GestureHandlerRootView style={baseStyles.container}>
            <LinearBackground>
                <StatusBar barStyle="dark-content" />
                <LogoHeader>
                    <SwipeCards
                        {...swipeCards}
                        onChangeX={_onChangeX}
                        swipeLeft={pressCross}
                        swipeRight={pressTick}
                        isLastCard={_handleIsLastCard}
                    />
                    <>
                    {/* welcome card */}
                    <SingleSwipeCard visible={showWelcome} onSwiped={_onWelcomeSwiped} opacity={0.95}>
                        <FeedWelcomeCard />
                    </SingleSwipeCard>
                    {/* instructions card */}
                    <SingleSwipeCard visible={showInstructions} onSwiped={_onInstructionsSwiped} opacity={0.95}>
                        <FeedInstructionsCard />
                    </SingleSwipeCard>
                    {/* no users card */}
                    <SingleSwipeCard visible={showNoUsersCard} onSwiped={() => console.log("swiped")}>
                        <FeedNoUsersCard
                            onPressContinue={() => console.log("continue pressed")}
                            onPressFilter={() => console.log("filter pressed")}
                        />
                    </SingleSwipeCard>
                    {(showRewindAdCard && rewindAdCard && onRewindAdCardSwiped) && (
                        <SingleSwipeCard onSwiped={_onRewindAdCardSwiped} opacity={0.95}>
                            <FeedRewindAdCard {...rewindAdCard} />
                        </SingleSwipeCard>
                    )}
                    {(!showIntroCards && !showRewindAdCard) && <FeedLoadingCard visible={loading} />}
                    </>
                    <View style={baseStyles.swipeButtonsContainer}>
                        <SwipeButtons
                            {...swipeButtons}
                            disabled={isLastCard || swipeCards.cardsDisabled || loading || showRewindAdCard}
                        />
                    </View>
                </LogoHeader>
            </LinearBackground>
            {matchSuccess && <MatchSuccess {...matchSuccess} />}
        </GestureHandlerRootView>
    )
};
