import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useLayout } from "./useLayout";

interface Props {
    pressed: boolean;
    disabled: boolean;
}

export const useLayoutStyles = ({
    pressed,
    disabled,
}: Props) => {
    const shared = useLayout({pressed, disabled});

    const container = useAnimatedStyle(() => {
        return {
            opacity: withTiming(shared.value!.opacity, { 
                duration: 250,
            }),
        }
    });

    return { layout: { container } };
};
