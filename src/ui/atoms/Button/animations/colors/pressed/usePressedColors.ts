import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { Variant } from "../../../Button.types";
import { useColors } from "./useColors";

interface Props {
    variant: Variant;
    pressed: boolean;
}

export const usePressedColors = ({
    variant,
    pressed,
}: Props) => {
    const shared = useColorInterpolation({check: pressed, duration: 150});
    const { styles, pressedStyles } = useColors(variant);

    const button = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(shared.value, [0, 1], [
                styles.button.backgroundColor,
                pressedStyles.button.backgroundColor
            ]),
            borderColor: interpolateColor(shared.value, [0, 1], [
                styles.button.borderColor,
                pressedStyles.button.borderColor,
            ]),
        }
    });

    const text = useAnimatedStyle(() => {
        return {
            color: interpolateColor(shared.value, [0, 1], [
                styles.text.color,
                pressedStyles.text.color,
            ]),
        }
    });

    return { pressedColors: { button, text } };
};
