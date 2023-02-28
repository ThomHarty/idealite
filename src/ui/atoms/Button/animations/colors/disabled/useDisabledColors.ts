import { interpolateColor, useAnimatedStyle } from "react-native-reanimated";

import { useColorInterpolation } from "../../../../../../shared/hooks";
import { Variant } from "../../../Button.types";
import { useColors } from "./useColors";

interface Props {
    variant: Variant;
    disabled: boolean;
}

export const useDisabledColors = ({
    variant,
    disabled,
}: Props) => {
    const shared = useColorInterpolation({check: disabled});
    const { styles, disabledStyles } = useColors(variant);

    const button = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(shared.value, [0, 1], [
                styles.button.backgroundColor,
                disabledStyles.button.backgroundColor
            ]),
            borderColor: interpolateColor(shared.value, [0, 1], [
                styles.button.borderColor,
                disabledStyles.button.borderColor,
            ]),
        }
    });

    const text = useAnimatedStyle(() => {
        return {
            color: interpolateColor(shared.value, [0, 1], [
                styles.text.color,
                disabledStyles.text.color,
            ]),
        }
    });

    return { disabledColors: { button, text } };
};
