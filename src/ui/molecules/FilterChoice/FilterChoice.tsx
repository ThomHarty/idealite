import React, { memo, ReactElement, useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import Animated from "react-native-reanimated";

import { Active, IFilterChoiceProps } from "./FilterChoice.types";
import { baseStyles } from "./FilterChoice.styles";
import { Typography } from "../../atoms";
import { COLORS } from "../../../theme";
import { useLayoutStyles } from "./animations";

export const FilterChoice = memo(({
    initial,
    onTabChanged,
}: IFilterChoiceProps): ReactElement => {
    const [active, setActive] = useState<Active>(initial || "Ideas");
    const { layout } = useLayoutStyles(active === "Ideas");

    const handleSetFilter = useCallback((tab: Active) => {
        setActive(tab);
        onTabChanged(tab);
    }, []);

    return (
        <View style={baseStyles.container}>
            <Animated.View
                style={[
                    baseStyles.tabContainer,
                    layout.tabContainer,
                ]}
            />
            <Pressable
                onPress={() => handleSetFilter("Ideas")}
                style={baseStyles.textContainer}
            >
                <Typography
                    text="Ideas"
                    animate={{
                        zero: COLORS.PRIMARY,
                        one: COLORS.WHITE,
                        check: active === "Ideas",
                    }}
                />
            </Pressable>
            <Pressable
                onPress={() => handleSetFilter("Skills")}
                style={baseStyles.textContainer}
            >
                <Typography
                    text="Skills"
                    animate={{
                        zero: COLORS.PRIMARY,
                        one: COLORS.WHITE,
                        check: active === "Skills",
                    }}
                />
            </Pressable>
        </View>
    );
});
