import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { useColors } from "./useColors";

interface Props {
    hasSelected: boolean;
}

export const useSelectedColors = ({
    hasSelected,
}: Props) => {
    const shared = useColorInterpolation({check: hasSelected, duration: 350});
    const { styles, selectedStyles } = useColors();

    const selected = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(shared.value, [0, 1], [
                styles.selected.backgroundColor,
                selectedStyles.selected.backgroundColor,
            ]),
        }
    });

    return { selectedColors: { selected } };
};
