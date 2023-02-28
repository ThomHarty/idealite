import { useCallback, useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";

interface Props {
    focused: boolean;
    isNotEmpty: boolean;
}

export const useLabelLayout = ({
    focused,
    isNotEmpty,
}: Props) => {
    const getSharedValue = useCallback(() => {
        if(isNotEmpty || focused) {
            return {
                top: 0,
                fontSize: 14,
                marginBottom: 5,
            };
        } else {
            return {
                top: 26,
                fontSize: 18,
                marginBottom: 0,
            };
        }
    }, [focused, isNotEmpty]);
    
    const labelShared = useSharedValue(getSharedValue());

    useEffect(() => {
        labelShared.value = getSharedValue();
    }, [focused, isNotEmpty]);

    return labelShared;
};
