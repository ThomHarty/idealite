import React, { ReactElement } from "react";
import { View } from "react-native";

import { Image, Typography } from "../../atoms";
import { ISwipeUserInfoProps } from "./SwipeUserInfo.types";
import { baseStyles } from "./SwipeUserInfo.styles";
import { COLORS } from "../../../theme";

export const SwipeUserInfo = ({
    avatar,
    title,
    name,
    distance,
}: ISwipeUserInfoProps): ReactElement => {
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.avatar}>
                <Image src={avatar} size="avatarSmall" />
            </View>
            <View>
                <Typography text={title} />
                <View style={baseStyles.textRow}>
                    <Typography text={name} size="small" />
                    <View style={baseStyles.separator} />
                    <Typography
                        text={distance}
                        size="tiny"
                        color={COLORS.ACCENT_ONE}
                    />
                </View>
            </View>
        </View>
    )
};
