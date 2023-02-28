import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useActiveLayout } from "./useActiveLayout";

interface Props {
    active: boolean;
}

export const useLayoutStyles = ({
    active,
}: Props) => {
    const shared = useActiveLayout({active});

    const bar = useAnimatedStyle(() => {
        return {
            opacity: withTiming(shared.value!.opacity, { 
                duration: 250,
            }),
        }
    });

    return { layout: { bar } };
};
