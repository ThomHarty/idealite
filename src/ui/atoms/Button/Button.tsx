import React, { memo, ReactElement, useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

import { Icon } from "../../../shared/components";
import { IButtonProps } from "./Button.types";
import { useDisabledColors, usePressedColors } from "./animations";
import { useStyles } from "./useStyles";

export const Button = memo(({
    text,
    onPress,
    variant = "primary",
    disabled = false,
    icon,
}: IButtonProps): ReactElement => {
    const [pressed, setPressed] = useState(false);
    const [isDisabled, setIsDisabled] = useState(disabled);
    const baseStyles = useStyles(variant);
    const { pressedColors } = usePressedColors({pressed, variant});
    const { disabledColors } = useDisabledColors({disabled, variant});

    const handlePressedIn = () => {
        setPressed(true);
    };

    const handlePressedOut = () => {
        setTimeout(() => setPressed(false), 100);
    };

    useEffect(() => {
        if(disabled) {
            setIsDisabled(true);
        } else {
            setTimeout(() => setIsDisabled(false), 250);
        };
    }, [disabled]);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressedIn}
            onPressOut={handlePressedOut}
            disabled={disabled}
        >
            <Animated.View style={[
                baseStyles.button,
                !isDisabled && pressedColors.button,
                isDisabled && disabledColors.button,
            ]}>
                {icon && (
                    <View style={[baseStyles.iconContainer]}>
                        <Animated.Text style={[
                            !isDisabled && pressedColors.text,
                            isDisabled && disabledColors.text,
                        ]}>
                            <Icon
                                name={icon}
                                iconStyles={baseStyles.icon}
                                testID="button-icon"
                            />
                        </Animated.Text>
                    </View>
                )}
                <Animated.Text style={[
                    baseStyles.text,
                    !isDisabled && pressedColors.text,
                    isDisabled && disabledColors.text,
                ]}>
                    {text}
                </Animated.Text>
            </Animated.View>
        </Pressable>
    );
});
