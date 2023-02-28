import React, { ReactElement } from "react";
import { Keyboard, Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Icon } from "../../../shared/components";
import { COLORS } from "../../../theme";
import { Divider, FakeInput, Image, Typography } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IAccountSettingsTemplateProps } from "./AccountSettingsTemplate.types";
import { useStyles } from "./useStyles";

export const AccountSettingsTemplate = ({
    onPressBack,
    avatar,
    name,
    email,
    telephone,
    onPressTelephone,
    dob,
    onPressDob,
    onPressChangePassword,
    onPressDeleteAccount,
}: IAccountSettingsTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Account">
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* header */}
                    <View style={baseStyles.topContainer}>
                        <Image src={avatar} size="avatarLarge" />
                        <View style={baseStyles.nameContainer}>
                            <Typography text={name} size="heading3" />
                        </View>
                    </View>
                    <Divider />
                    {/* email */}
                    <View style={baseStyles.itemContainer}>
                        <View style={baseStyles.fakeEmailInputContainer}>
                            <FakeInput
                                label="Email"
                                text={email}
                            />
                        </View>
                    </View>
                    <Divider />
                    {/* telephone */}
                    <View style={baseStyles.telephoneLabel}>
                        <Typography text="Telephone" size="tiny" color={COLORS.GREY_DARK} />
                    </View>
                    <Pressable style={baseStyles.itemContainer} onPress={onPressTelephone}>
                        <View style={baseStyles.fakeTelephoneInputContainer}>
                            <View style={baseStyles.codeContainer}>
                                <FakeInput text={telephone.code} />
                            </View>
                            <View style={baseStyles.numberContainer}>
                                <FakeInput text={telephone.number} />
                            </View>
                        </View>
                        <View style={baseStyles.telephoneIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* dob */}
                    <View style={baseStyles.telephoneLabel}>
                        <Typography text="Date of birth" size="tiny" color={COLORS.GREY_DARK} />
                    </View>
                    <Pressable style={baseStyles.itemContainer} onPress={onPressDob}>
                        <View style={baseStyles.fakeTelephoneInputContainer}>
                            <View style={baseStyles.dobContainer}>
                                <FakeInput text={dob.day} />
                            </View>
                            <View style={baseStyles.dobContainer}>
                                <FakeInput text={dob.month} />
                            </View>
                            <View style={baseStyles.dobContainer}>
                                <FakeInput text={dob.year} />
                            </View>
                        </View>
                        <View style={baseStyles.telephoneIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* change password */}
                    <Pressable style={baseStyles.navItemContainer} onPress={onPressChangePassword}>
                        <Typography text="Change password" size="text" />
                        <View style={baseStyles.fakeInputIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                    {/* delete account */}
                    <Pressable style={baseStyles.navItemContainer} onPress={onPressDeleteAccount}>
                        <Typography text="Delete account" size="text" color={COLORS.DANGER} />
                        <View style={baseStyles.fakeInputIconContainer}>
                            <Icon name="right-chevron" iconStyles={baseStyles.fakeInputIcon} />
                        </View>
                    </Pressable>
                    <Divider />
                </ScrollView>
            </TextHeader>
        </Pressable>
    )
};
