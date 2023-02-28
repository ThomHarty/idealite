import React, { memo, ReactElement } from "react";
import Animated from "react-native-reanimated";

import { ITypographyProps } from "./Typography.types";
import { useColors, useLayoutStyles } from "./animations";
import { useStyles } from "./useStyles";

export const Typography = memo(({
    text,
    size = "text",
    animate,
    color,
    nativeProps,
    lineHeight,
}: ITypographyProps): ReactElement => {
    const baseStyles = useStyles(color, lineHeight);
    const { layout } = useLayoutStyles(size);
    const textColor = animate ? useColors({...animate}) : null;
    return (
        <Animated.Text {...nativeProps} style={[
            baseStyles.text,
            layout.text,
            animate && textColor,
        ]}>
            {text}
        </Animated.Text>
    );
});
