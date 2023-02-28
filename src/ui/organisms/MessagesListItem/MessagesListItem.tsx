import React, { memo, ReactElement } from "react";
import { View, Pressable, Text } from "react-native";

import { Typography } from "../../atoms";
import { IMessagesListItemProps } from "./MessagesListItem.types";
import { useStyles } from "./useStyles";

import { COLORS } from "../../../theme";
import { AvatarStatus } from "../../molecules";
import { Icon } from "../../../shared/components";

export const MessagesListItem = memo(({
    avatarStatus,
    id,
    name,
    title,
    message,
    onPress,
    unread = false,
    superlike,
}: IMessagesListItemProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <Pressable
            onPress={() => onPress(id)}
            style={baseStyles.container}
            testID="press"
        >
            <View style={baseStyles.avatarContainer}>
                <AvatarStatus testID="avatar-status" {...avatarStatus} />
            </View>
            <View style={baseStyles.textContainer}>
                <View style={baseStyles.nameContainer}>
                    {superlike && (
                        <Text style={baseStyles.icon}>
                            <Icon name="star" testID="star-icon" />
                        </Text>
                    )}
                    <Typography text={name} size="small" />
                </View>
                <View style={baseStyles.titleContainer}>
                    <Typography
                        text={title}
                        size="tiniest"
                        color={COLORS.GREY}
                        nativeProps={{
                            numberOfLines: 1,
                        }}
                    />
                </View>
                <Typography
                    text={message}
                    size="tiny"
                    color={COLORS.GREY_DARK}
                    animate={{
                        zero: COLORS.GREY_DARK,
                        one: COLORS.PRIMARY,
                        check: unread,
                    }}
                    nativeProps={{
                        numberOfLines: 1,
                    }}
                />
            </View>
        </Pressable>
    )
});
