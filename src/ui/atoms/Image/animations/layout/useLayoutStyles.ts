import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { Size } from "../../Image.types";

import { useLayout } from "./useLayout";

export const useLayoutStyles = (size: Size) => {
    const shared = useLayout(size);

    const image = useAnimatedStyle(() => {
        return {
            height: withTiming(shared.value!.image.height, { 
                duration: 250,
            }),
            width: withTiming(shared.value!.image.width, { 
                duration: 250,
            }),
            borderRadius: withTiming(shared.value!.image.borderRadius, { 
                duration: 250,
            }),
        }
    });

    return { layout: { image } };
};
