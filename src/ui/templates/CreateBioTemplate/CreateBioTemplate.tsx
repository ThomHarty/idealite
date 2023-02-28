import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";

import { Button, Image, Input, Link, TextArea, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { ICreateBioTemplateProps } from "./CreateBioTemplate.types";
import { useStyles } from "./useStyles";

export const CreateBioTemplate = ({
    onPressBack,
    onPressNext,
    onPressSkip,
    location,
    bio,
    avatar,
}: ICreateBioTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if((location.value.length > 3) && (bio.value.length > 10)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [location.value, bio.value]);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
                    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                        <LogoHeader onPressBack={onPressBack}>
                            <View />
                            <View style={baseStyles.centerContainer}>
                                    <View style={baseStyles.avatarContainer}>
                                        <Image
                                            size="avatarMedium"
                                            src={avatar}
                                        />
                                    </View>
                                <View style={baseStyles.headingContainer}>
                                    <Typography
                                        text="Tell us a bit about you"
                                        size="heading2"
                                    />
                                </View>
                                <View style={baseStyles.inputContainer}>
                                    <Input {...location} />
                                </View>
                                <View style={baseStyles.bioContainer}>
                                    <TextArea {...bio} limit={500} />
                                </View>
                            </View>
                        </LogoHeader>
                    </KeyboardAvoidingView>
                </Pressable>
            </ScrollView>
            <View style={baseStyles.buttonContainer}>
                <Button
                    text="Next"
                    onPress={onPressNext}
                    disabled={disabled}
                />
                <View style={baseStyles.linkContainer}>
                    <Text style={baseStyles.link}>
                        <Link
                            text="Skip for now"
                            onPress={onPressSkip}
                        />
                    </Text>
                </View>
            </View>
        </View>
    );
};
