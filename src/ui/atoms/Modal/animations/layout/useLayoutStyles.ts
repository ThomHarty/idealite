import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useOpenLayout } from "./useOpenLayout";

interface Props {
    open: boolean;
}

export const useLayoutStyles = ({
    open,
}: Props) => {
    const dropdownShared = useOpenLayout({open});

    const container = useAnimatedStyle(() => {
        return {
            opacity: withTiming(dropdownShared.value!.container.opacity, { 
                duration: 350,
            }),
        }
    });

    const modalContainer = useAnimatedStyle(() => {
        return {
            top: withTiming(dropdownShared.value!.modalContainer.top, { 
                duration: 400,
            }),
        }
    });

    return { layout: { container, modalContainer } };
};
