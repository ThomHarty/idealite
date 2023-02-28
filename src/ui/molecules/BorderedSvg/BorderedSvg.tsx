import React, { memo, ReactElement } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

import { IBorderedSvgProps } from "./BorderedSvg.types";
import { Typography } from "../../atoms";
import { COLORS } from "../../../theme";
import { useLayoutStyles, useActiveColors } from "./animations";
import { useStyles } from "./useStyles";
import { SvgSwitch } from "../../../shared/components";

export const BorderedSvg = memo(({
    svg,
    text,
    size = "large",
    activeBorderColor = COLORS.PRIMARY,
    active,
}: IBorderedSvgProps): ReactElement => {
    const baseStyles = useStyles(size);
    const { layout } = useLayoutStyles(size);
    const { activeColors } = useActiveColors({active, activeBorderColor});
    return (
        <Animated.View style={[
            baseStyles.container,
            layout.container,
            activeColors.container,
        ]}>
            <Animated.View style={[
                baseStyles.svgContainer,
                layout.svgContainer,
            ]}>
                <SvgSwitch svg={svg} />
            </Animated.View>
            {(size === "large" && text) && (
                <View style={baseStyles.textContainer}>
                    <Typography text={text} size="small" />
                </View>
            )}
        </Animated.View>
    );
});
