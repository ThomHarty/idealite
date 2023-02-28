import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { useColors } from "./useColors";

interface Props {
    active: boolean;
}

export const useActiveColors = ({
    active,
}: Props) => {
    const shared = useColorInterpolation({check: active});
    const { styles, activeStyles } = useColors();

    const circle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(shared.value, [0, 1], [
                styles.circle.backgroundColor,
                activeStyles.circle.backgroundColor
            ]),
            borderColor: interpolateColor(shared.value, [0, 1], [
                styles.circle.borderColor,
                activeStyles.circle.borderColor,
            ]),
        }
    });

    return { activeColors: { circle } };
};
