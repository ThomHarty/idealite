import React, { ReactElement } from "react";
import { View, Image as RNImage } from "react-native";

import { ISentChatMessageProps } from "./SentChatMessage.types";
import { Image, Typography } from "../../atoms";
import { useStyles } from "./useStyles";
import { COLORS } from "../../../theme";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const SentChatMessage = ({
    avatar,
    message,
    readTime,
}: ISentChatMessageProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <>
        <View style={baseStyles.container}>
            <View style={baseStyles.messageContainer}>
                <Typography
                    text={message}
                    size="small"
                    lineHeight={21}
                />
            </View>
            <View style={baseStyles.avatarContainer}>
                <Image
                    testID="avatar"
                    src={avatar || DEFAULT_IMAGE}
                    size="avatarTiny"
                />
            </View>
        </View>
        {readTime && (
            <View style={baseStyles.readContainer}>
                <Typography
                    text={`Read: ${readTime}`}
                    size="tiny"
                    color={COLORS.GREY}
                />
            </View>
        )}
        </>
    )
};
