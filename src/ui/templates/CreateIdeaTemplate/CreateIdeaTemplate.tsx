import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from "react-native";

import { Button, Image, Input, Link, TextArea, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { ICreateIdeaTemplateProps } from "./CreateIdeaTemplate.types";
import { useStyles } from "./useStyles";

export const CreateIdeaTemplate = ({
    onPressBack,
    onPressNext,
    name,
    idea,
    avatar,
}: ICreateIdeaTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if((name.value.length > 3) && (idea.value.length > 10)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [name.value, idea.value]);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
                    <LogoHeader onPressBack={onPressBack}>
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
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
                                        text="What's your idea?"
                                        size="heading2"
                                    />
                                </View>
                                <View style={baseStyles.inputContainer}>
                                    <Input {...name} />
                                </View>
                                <View style={baseStyles.ideaContainer}>
                                    <TextArea {...idea} limit={500} />
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </LogoHeader>
                </Pressable>
            </ScrollView>
            <View style={baseStyles.buttonContainer}>
                <Button
                    text="Next"
                    onPress={onPressNext}
                    disabled={disabled}
                />
            </View>
        </View>
    );
};
