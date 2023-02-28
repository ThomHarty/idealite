import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useLayout } from "./useLayout";

export const useLayoutStyles = (checked: boolean) => {
    const shared = useLayout(checked);

    const center = useAnimatedStyle(() => {
        return {
            height: withTiming(shared.value!.center.height, { 
                duration: 250,
            }),
            width: withTiming(shared.value!.center.width, { 
                duration: 250,
            }),
            borderRadius: withTiming(shared.value!.center.borderRadius, { 
                duration: 250,
            }),
        }
    });

    return { layout: { center } };
};
