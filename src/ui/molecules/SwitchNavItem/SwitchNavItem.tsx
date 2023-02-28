import React, { memo, ReactElement } from "react";
import { View } from "react-native";

import { ISwitchNavItemProps } from "./SwitchNavItem.types";
import { baseStyles } from "./SwitchNavItem.styles";
import { Divider, Switch, Typography } from "../../atoms";

export const SwitchNavItem = memo(({
    text,
    switchProps,
}: ISwitchNavItemProps): ReactElement => {
    return (
        <>
        <View style={baseStyles.container}>
            <Typography text={text} />
            <Switch {...switchProps} testID="switch" />
        </View>
        <Divider />
        </>
    )
});
