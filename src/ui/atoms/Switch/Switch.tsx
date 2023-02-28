import React, { memo, ReactElement } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

import { ISwitchProps } from "./Switch.types";
import { baseStyles } from "./Switch.styles";
import { useCheckedColors, useDisabledColors, useLayoutStyles } from "./animations";

export const Switch = memo(({
    onPress,
    checked,
    disabled = false,
    testID,
}: ISwitchProps): ReactElement => {
    const { layout } = useLayoutStyles(checked);
    const { checkedColors } = useCheckedColors({checked});
    const { disabledColors } = useDisabledColors({disabled});
    return (
        <Pressable
            testID={testID || "switch"}
            onPress={onPress}
            style={baseStyles.wrapper}
            disabled={disabled}
        >
            <Animated.View style={[
                baseStyles.container,
                !disabled && checkedColors.container,
                disabled && disabledColors.container,
            ]}>
                <Animated.View style={[
                    baseStyles.center,
                    !disabled && layout.center,
                    !disabled && checkedColors.center,
                    disabled && disabledColors.center,
                ]} />
            </Animated.View>
        </Pressable>
    );
});
