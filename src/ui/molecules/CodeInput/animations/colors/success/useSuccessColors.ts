import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { useColors } from "./useColors";

interface Props {
    success: boolean;
}

export const useSuccessColors = ({
    success,
}: Props) => {
    const shared = useColorInterpolation({check: success});
    const { styles, successStyles } = useColors();

    const input = useAnimatedStyle(() => {
        return {
            borderColor: interpolateColor(shared.value, [0, 1], [
                styles.input.borderColor,
                successStyles.input.borderColor,
            ]),
        }
    });

    return { successColors: { input } };
};
