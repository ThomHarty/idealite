import React, { ReactElement, useCallback } from "react";

import { IOnboardingSlidesTemplateProps, OnboardingSlidesTemplate } from "../../ui/templates";
import * as hooks from "./hooks";

export const OnboardingSlides = ({ navigation }: any): ReactElement => {
    const slidesText = hooks.useSlidesTestProps();
    // const handleSkip = hooks.useHandleSkipProps();
    // const handleGetStarted = hooks.useHandleGetStartedProps();
    const handleSkip = useCallback(() => {
        navigation.navigate("Landing");
    }, []);

    const handleGetStarted = useCallback(() => {
        navigation.navigate("Landing");
    }, []);

    const props: IOnboardingSlidesTemplateProps = {
        slidesText,
        handleSkip,
        handleGetStarted,
    };

    return <OnboardingSlidesTemplate {...props} />;
};
