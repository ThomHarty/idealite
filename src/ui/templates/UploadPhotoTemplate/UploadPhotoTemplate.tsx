import React, { ReactElement } from "react";
import { Image as RNImage, Keyboard, Pressable, Text, View } from "react-native";

import { Button, FlatIconButton, Image, Link, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { IUploadPhotoTemplateProps } from "./UploadPhotoTemplate.types";
import { useStyles } from "./useStyles";
import { COLORS } from "../../../theme";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const UploadPhotoTemplate = ({
    onPressSkip,
    onPressUpload,
    avatar,
    onPressNext,
}: IUploadPhotoTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <View style={baseStyles.container}>
            <LogoHeader>
                    <View />
                    <View style={baseStyles.centerContainer}>
                        <Pressable onPress={onPressUpload}>
                            <View style={baseStyles.avatarContainer}>
                                <Image
                                    size="avatarMedium"
                                    src={avatar || DEFAULT_IMAGE}
                                />
                            </View>
                            <View style={baseStyles.iconContainer}>
                                {avatar && (
                                    <FlatIconButton
                                        icon="tick"
                                        onPress={onPressUpload}
                                        diameter={23}
                                        backgroundColor={COLORS.PRIMARY}
                                        borderColor={COLORS.WHITE}
                                        iconColor={COLORS.WHITE}
                                        iconSize={10}
                                    />
                                )}
                                {!avatar && (
                                    <FlatIconButton
                                        icon="plus"
                                        onPress={onPressUpload}
                                        diameter={23}
                                        backgroundColor={COLORS.WHITE}
                                        borderColor={COLORS.PRIMARY}
                                        iconSize={12}
                                    />
                                )}
                            </View>
                        </Pressable>
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="Upload a photo of yourself"
                                size="heading2"
                            />
                        </View>
                        <View style={baseStyles.infoContainer}>
                            <Typography
                                text="A profile picture will help others engage with you!"
                                size="text"
                            />
                        </View>
                    </View>
                    <>
                    {!avatar && (
                        <View style={baseStyles.linkContainer}>
                            <Text style={baseStyles.link}>
                                <Link
                                    text="Skip for now"
                                    onPress={onPressSkip}
                                />
                            </Text>
                        </View>
                    )}
                    {avatar && (
                        <View style={baseStyles.buttonContainer}>
                            <Button
                                text="Next"
                                onPress={onPressNext}
                            />
                        </View>
                    )}
                    </>
            </LogoHeader>
        </View>
    )
};
