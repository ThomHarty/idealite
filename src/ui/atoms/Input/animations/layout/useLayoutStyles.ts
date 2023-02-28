import { useAnimatedStyle, withTiming } from "react-native-reanimated";

import { useErrorLayout } from "./useErrorLayout";
import { useLabelLayout } from "./useLabelLayout";

interface Props {
    focused: boolean;
    isNotEmpty: boolean;
    hasError: boolean;
}

export const useLayoutStyles = ({
    focused,
    isNotEmpty,
    hasError,
}: Props) => {
    const errorShared = useErrorLayout(hasError);
    const labelShared = useLabelLayout({isNotEmpty, focused});

    const error = useAnimatedStyle(() => {
        return {
            opacity: withTiming(errorShared.value!.opacity, { 
                duration: 250,
            }),
        }
    });

    const label = useAnimatedStyle(() => {
        return {
            top: withTiming(labelShared.value!.top, { 
                duration: 250,
            }),
            fontSize: withTiming(labelShared.value!.fontSize, { 
                duration: 250,
            }),
            marginBottom: withTiming(labelShared.value!.marginBottom, { 
                duration: 250,
            }),
        }
    });

    return { layout: { error, label } };
};
