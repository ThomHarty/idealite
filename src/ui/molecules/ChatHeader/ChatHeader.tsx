import React, { ReactElement } from "react";
import { Pressable, View } from "react-native";

import { Icon } from "../../../shared/components";
import { Image, Typography } from "../../atoms";
import { IChatHeaderProps } from "./ChatHeader.types";
import { useStyles } from "./useStyles";

export const ChatHeader = ({
    onPressBack,
    avatar,
    name,
}: IChatHeaderProps): ReactElement => {
    const baseStyles = useStyles();

    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.headerContainer}>
                <View style={baseStyles.chevronContainer}>
                    <Pressable onPress={onPressBack}>
                        <Icon
                            name="left-chevron"
                            iconStyles={baseStyles.chevron}
                            testID="chevron"
                        />
                    </Pressable>
                </View>
                <View style={baseStyles.avatarContainer}>
                    <Image src={avatar} size="avatarSmall" />
                </View>
                <Typography text={name} size="text" />
            </View>
        </View>
    );
};
