import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, Text, View } from "react-native";
import { validate } from 'email-validator';

import { Button, Input, Link, Typography } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IRecoverEmailTemplateProps } from "./RecoverEmailTemplate.types";
import { useStyles } from "./useStyles";

export const RecoverEmailTemplate = ({
    onPressBack,
    onPressNext,
    onPressForgot,
    email,
}: IRecoverEmailTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        const valid = validate(email.value);
        if(valid) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [email.value]);
    return (
        <Pressable onPress={Keyboard.dismiss}>
            <TextHeader onPressBack={onPressBack} text="Recover account">
                <View style={baseStyles.container}>
                    <View />
                    <View style={baseStyles.centerContainer}>
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="What's your email?"
                                size="heading2"
                            />
                        </View>
                        <View style={baseStyles.inputContainer}>
                            <Input
                                {...email}
                                nativeProps={{
                                    keyboardType: "email-address",
                                    autoCapitalize: "none",
                                    autoCorrect: false,
                                }}
                            />
                        </View>
                        <Text style={baseStyles.linkContainer}>
                            <Link
                                text="I can't remember my email"
                                onPress={onPressForgot}
                            />
                        </Text>
                    </View>
                    <View style={baseStyles.buttonContainer}>
                        <Button
                            text="Recover account"
                            onPress={onPressNext}
                            disabled={disabled}
                        />
                    </View>
                </View>
            </TextHeader>
        </Pressable>
    )
};
