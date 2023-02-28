import React, { memo, ReactElement } from "react";
import { Pressable } from "react-native";

import { IOnPressProps } from "./OnPress.types";

export const OnPress = memo(({
    children,
    onPress,
}: IOnPressProps): ReactElement => {
    return (
        <Pressable onPress={onPress}>
            {children}
        </Pressable>
    );
});
