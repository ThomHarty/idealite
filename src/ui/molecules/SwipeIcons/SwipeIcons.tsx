import React, { ReactElement } from "react";
import { View, Pressable } from "react-native";
import Animated from "react-native-reanimated";

import { ISwipeIconsProps } from "./SwipeIcons.types";
import { baseStyles } from "./SwipeIcons.styles";
import { COLORS } from "../../../theme";
import { Icon } from "../../../shared/components";
import { FlatIconButton } from "../../atoms";

export const SwipeIcons = ({
    leftOnPress,
    rightOnPress,
    showSwipeIcons,
    iconStyle,
    tickStyle,
    crossStyle,
}: ISwipeIconsProps): ReactElement => {
    return (
        <>
        <View style={baseStyles.iconsContainer}>
            {/* grey icons */}
            {leftOnPress ? (
                <Pressable testID="left-press" onPress={leftOnPress}>
                    <Animated.Text style={[baseStyles.icon, iconStyle]}>
                        <Icon name="more" iconStyles={baseStyles.moreIcon} />
                    </Animated.Text>
                </Pressable>
            ) : <View />}
            {rightOnPress ? (
                <Pressable testID="right-press" onPress={rightOnPress}>
                    <Animated.Text style={[baseStyles.icon, iconStyle]}>
                        <Icon name="filter" iconStyles={baseStyles.filterIcon} />
                    </Animated.Text>
                </Pressable>
            ) : <View />}
        </View>
        {/* flatIcons */}
        {showSwipeIcons && (
            <>
            <Animated.View style={[baseStyles.tickIcon, tickStyle]}>
                <FlatIconButton
                    icon="tick"
                    onPress={() => {}}
                    iconColor={COLORS.WHITE}
                    backgroundColor={COLORS.SUCCESS}
                    diameter={52}
                />
            </Animated.View>
            <Animated.View style={[baseStyles.crossIcon, crossStyle]}>
                <FlatIconButton
                    icon="cross"
                    onPress={() => {}}
                    iconColor={COLORS.WHITE}
                    backgroundColor={COLORS.DANGER}
                    diameter={52}
                />
            </Animated.View>
            </>
        )}
        </>
    )
};
