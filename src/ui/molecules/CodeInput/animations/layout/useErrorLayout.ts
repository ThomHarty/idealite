import { useCallback, useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";

export const useErrorLayout = (error: boolean) => {
    const getSharedValue = useCallback(() => {
        if(error) {
            return { opacity: 1 };
        } else {
            return { opacity: 0 };
        }
    }, [error]);
    
    const errorShared = useSharedValue(getSharedValue());

    useEffect(() => {
        errorShared.value = getSharedValue();
    }, [error]);

    return errorShared;
};
