import React, { ReactElement } from "react";
import { View, Image as RNImage } from "react-native";

import { IReceivedChatMessageProps } from "./ReceivedChatMessage.types";
import { Image, Typography } from "../../atoms";
import { useStyles } from "./useStyles";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const ReceivedChatMessage = ({
    avatar,
    message,
}: IReceivedChatMessageProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <>
        <View style={baseStyles.container}>
            <View style={baseStyles.avatarContainer}>
                <Image
                    testID="avatar"
                    src={avatar || DEFAULT_IMAGE}
                    size="avatarTiny"
                />
            </View>
            <View style={baseStyles.messageContainer}>
                <Typography
                    text={message}
                    size="small"
                    lineHeight={21}
                />
            </View>
        </View>
        </>
    )
};
