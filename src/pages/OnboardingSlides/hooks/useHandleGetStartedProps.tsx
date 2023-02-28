import { useCallback } from "react";

import { IOnboardingSlidesTemplateProps } from "../../../ui/templates";

export const useHandleGetStartedProps = useCallback(
    (): IOnboardingSlidesTemplateProps["handleGetStarted"] => {
        const handleGetStarted = () => console.log("get started");

        return handleGetStarted;
}, []);
