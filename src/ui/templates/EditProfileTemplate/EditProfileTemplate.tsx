import React, { ReactElement } from "react";
import { Pressable, View, Image as RNImage, SafeAreaView, ScrollView } from "react-native";

import { COLORS } from "../../../theme";
import { Button, Divider, FakeInput, FlatIconButton, Image, Typography } from "../../atoms";
import { IEditProfileTemplateProps } from "./EditProfileTemplate.types";
import { useStyles } from "./useStyles";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
import { Icon } from "../../../shared/components";
import { BorderedSvg, IBorderedSvgProps } from "../../molecules";
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

const svgListOne: IBorderedSvgProps["svg"][] = ["arrow", "chemist", "click", "dollar", "electric", "globe", "hand", "laptop"];
const svgListTwo: IBorderedSvgProps["svg"][] = ["pencil", "phone", "pills", "plane", "pound", "spanner", "tshirt"];

export const EditProfileTemplate = ({
    onPressSave,
    onPressCancel,
    onPressUpload,
    avatar,
    name,
    onPressName,
    tagline,
    onPressTagline,
    location,
    onPressLocation,
    swipeIcon,
    onPressSwipeIcon,
}: IEditProfileTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={baseStyles.container}>
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 165 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* upload */}
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
                    <Divider />
                    {/* name */}
                    <Pressable style={baseStyles.itemContainer} onPress={onPressName}>
                        <View style={baseStyles.fakeInputContainer}>
                            <FakeInput
                                label="Name"
                                text={name}
                            />
                        </View>
                        <View style={baseStyles.fakeInputIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* tagline */}
                    <Pressable style={baseStyles.itemContainer} onPress={onPressTagline}>
                        <View style={baseStyles.fakeInputContainer}>
                            <FakeInput
                                label="Tagline"
                                text={tagline}
                            />
                        </View>
                        <View style={baseStyles.fakeInputIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* location */}
                    <Pressable style={baseStyles.itemContainer} onPress={onPressLocation}>
                        <View style={baseStyles.fakeInputContainer}>
                            <FakeInput
                                label="Location"
                                text={location}
                            />
                        </View>
                        <View style={baseStyles.fakeInputIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* svgs */}
                    <View style={baseStyles.svgsContainer}>
                        <View style={baseStyles.svgsTextContainer}>
                            <Typography text="Swipe graphic" size="tiny" color={COLORS.GREY_DARK} />
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingLeft: 29, paddingRight: 29 }}>
                            <View>
                                <View style={baseStyles.svgRow}>
                                    {svgListOne.map((svg, i) => {
                                        return (
                                            <Pressable key={i} style={baseStyles.svg} onPress={() => onPressSwipeIcon(svg)}>
                                                <BorderedSvg svg={svg} size="small" active={svg === swipeIcon} />
                                            </Pressable>
                                        );
                                    })}
                                </View>
                                <View style={baseStyles.svgRow}>
                                    {svgListTwo.map((svg, i) => {
                                        return (
                                            <Pressable key={i} style={baseStyles.svg} onPress={() => onPressSwipeIcon(svg)}>
                                                <BorderedSvg svg={svg} size="small" active={svg === swipeIcon} />
                                            </Pressable>
                                        );
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button
                        text="Save"
                        onPress={onPressSave}
                    />
                </View>
                <Button
                    text="Cancel"
                    onPress={onPressCancel}
                    variant="secondary"
                />
            </View>
        </SafeAreaView>
    );
};
