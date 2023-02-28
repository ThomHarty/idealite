import { useCallback } from "react";
import { IOnboardingSlidesTemplateProps } from "../../../ui/templates";

export const useHandleSkipProps = useCallback(
    (): IOnboardingSlidesTemplateProps["handleSkip"] => {
        const handleSkip = () => console.log("skipped");

        return handleSkip;
}, []);
