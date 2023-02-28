import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { useColors } from "./useColors";

interface Props {
    active: boolean;
    activeBorderColor: string;
};

export const useActiveColors = ({
    active,
    activeBorderColor,
}: Props) => {
    const shared = useColorInterpolation({check: active, duration: 150});
    const { styles, activeStyles } = useColors(activeBorderColor);

    const container = useAnimatedStyle(() => {
        return {
            borderColor: interpolateColor(shared.value, [0, 1], [
                styles.container.borderColor,
                activeStyles.container.borderColor,
            ]),
        }
    });

    return { activeColors: { container } };
};
