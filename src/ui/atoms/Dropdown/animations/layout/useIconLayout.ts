import { useCallback, useEffect } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";

interface Props {
    isOpen: boolean;
}

export const useIconLayout = ({
    isOpen,
}: Props) => {
    const getSharedValue = useCallback(() => {
        if(isOpen) {
            return 180;
        } else {
            return 0;
        }
    }, [isOpen]);
    
    const shared = useSharedValue(getSharedValue());

    useEffect(() => {
        shared.value = withTiming(getSharedValue(), {
            duration: 250,
        });
    }, [isOpen]);

    return shared;
};
