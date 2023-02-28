import { useCallback, useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";

import { Size } from "../../Image.types";

export const useLayout = (size: Size) => {
    const getSharedValue = useCallback(() => {
        switch(size) {
            case "avatarTiny":
                return {
                    image: { height: 28, width: 28, borderRadius: 14 },
                };
            case "avatarSmall":
                return {
                    image: { height: 38, width: 38, borderRadius: 19 },
                };
            case "avatarMedium":
                return {
                    image: { height: 64, width: 64, borderRadius: 32 },
                };
            case "avatarLarge":
                return {
                    image: { height: 82, width: 82, borderRadius: 41 },
                };
            default:
                return {
                    image: { height: 200, width: 200, borderRadius: 0 },
                };
        }
    }, [size]);
    
    const imageShared = useSharedValue(getSharedValue());

    useEffect(() => {
        imageShared.value = getSharedValue();
    }, [size]);

    return imageShared;
};
