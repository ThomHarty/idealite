import { useCallback, useEffect } from "react";
import { withTiming, useSharedValue } from "react-native-reanimated";

interface Props {
    check: boolean;
    duration?: number;
}

export const useColorInterpolation = ({
    check,
    duration,
}: Props) => {
    const getSharedValue = useCallback(() => {
        if(check) {
            return 1;
        } else {
            return 0;
        }
    }, [check]);
    
    const shared = useSharedValue(getSharedValue());

    useEffect(() => {
        shared.value = withTiming(getSharedValue(), {
            duration: duration || 250,
        });
    }, [check]);

    return shared;
};
