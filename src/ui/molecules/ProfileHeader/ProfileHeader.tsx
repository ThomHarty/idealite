import React, { ReactElement } from "react";
import { View, Image as RNImage, Text } from "react-native";
import { Image, LinearBackground, Typography } from "../../atoms";

import { baseStyles } from "./ProfileHeader.styles";
import { IProfileHeaderProps } from "./ProfileHeader.types";
import { COLORS } from "../../../theme";
import { Icon } from "../../../shared/components";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const ProfileHeader = ({
    avatar,
    name,
    title,
    location,
    joined,
}: IProfileHeaderProps): ReactElement => {
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.gradientContainer}>
                <LinearBackground>
                    <></>
                </LinearBackground>
            </View>
            <View style={baseStyles.bodyContainer}>
                <View style={baseStyles.avatarContainer}>
                    <Image
                        size="avatarLarge"
                        src={avatar || DEFAULT_IMAGE}
                        testID="avatar"
                    />
                </View>
                <View style={baseStyles.nameContainer}>
                    <Typography
                        text={name}
                        size="heading3"
                    />
                </View>
                <View style={baseStyles.titleContainer}>
                    <Typography
                        text={title} 
                        size="tiny"
                    />
                </View>
                <View style={baseStyles.locationContainer}>
                    <Text style={baseStyles.icon}>
                        <Icon
                            name="location"
                            iconStyles={baseStyles.iconSize}
                            testID="location"
                        />
                    </Text>
                    <Typography
                        text={location}
                        size="tiny"
                        color={COLORS.GREY_DARK}
                    />
                </View>
                <View style={baseStyles.joinedContainer}>
                    <Text style={baseStyles.icon}>
                        <Icon
                            name="calendar"
                            iconStyles={baseStyles.iconSize}
                            testID="calendar"
                        />
                    </Text>
                    <Typography
                        text={`Joined ${joined}`}
                        size="tiny"
                        color={COLORS.GREY_DARK}
                    />
                </View>
            </View>
        </View>
    );
};
