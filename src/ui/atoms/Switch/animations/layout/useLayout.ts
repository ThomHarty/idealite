import { useCallback, useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";

export const useLayout = (checked: boolean) => {
    const getSharedValue = useCallback(() => {
        if(checked) {
            return {
                center: { right: -13 }
            };
        } else {
            return {
                center: { right: 13 }
            };
        }
    }, [checked]);
    
    const shared = useSharedValue(getSharedValue());

    useEffect(() => {
        shared.value = getSharedValue();
    }, [checked]);

    return shared;
};
