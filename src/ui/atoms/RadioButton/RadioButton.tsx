import React, { memo, ReactElement } from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";

import { IRadioButtonProps } from "./RadioButton.types";
import { baseStyles } from "./RadioButton.styles";
import { useCheckedColors, useDisabledColors, useLayoutStyles } from "./animations";

export const RadioButton = memo(({
    onPress,
    checked,
    disabled = false,
}: IRadioButtonProps): ReactElement => {
    const { layout } = useLayoutStyles(checked);
    const { checkedColors } = useCheckedColors({checked});
    const { disabledColors } = useDisabledColors({disabled});
    return (
        <Pressable
            testID="radio-button"
            onPress={onPress}
            style={baseStyles.wrapper}
            disabled={disabled}
        >
            <Animated.View style={[
                baseStyles.container,
                !disabled && checkedColors.container,
                disabled && disabledColors.container,
            ]}>
                {!disabled && (
                    <Animated.View style={[baseStyles.center, layout.center]} />
                )}
            </Animated.View>
        </Pressable>
    );
});
