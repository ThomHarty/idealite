import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, View } from "react-native";
import { validate } from 'email-validator';

import { Button, Input, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { IOnboardingEmailTemplateProps } from "./OnboardingEmailTemplate.types";
import { useStyles } from "./useStyles";

export const OnboardingEmailTemplate = ({
    onPressBack,
    onPressNext,
    email,
}: IOnboardingEmailTemplateProps): ReactElement => {
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
        <Pressable onPress={Keyboard.dismiss}  style={baseStyles.container}>
            <LogoHeader onPressBack={onPressBack}>
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
                </View>
                <View style={baseStyles.buttonContainer}>
                    <Button
                        text="Next"
                        onPress={onPressNext}
                        disabled={disabled}
                    />
                    </View>
            </LogoHeader>
        </Pressable>
    )
};
