import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Dropdown, Input, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { IOnboardingTelephoneTemplateProps } from "./OnboardingTelephoneTemplate.types";
import { useStyles } from "./useStyles";

export const OnboardingTelephoneTemplate = ({
    onPressBack,
    onPressNext,
    code,
    phone,
}: IOnboardingTelephoneTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if((code) && (phone.value.length > 9)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [code, phone]);
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <LogoHeader onPressBack={onPressBack}>
                <View />
                <View style={baseStyles.centerContainer}>
                    <View style={baseStyles.headingContainer}>
                        <Typography
                            text="What's your telephone number?"
                            size="heading2"
                        />
                    </View>
                    <View style={baseStyles.inputContainer}>
                        <View style={baseStyles.codeContainer}>
                            <Dropdown {...code} />
                        </View>
                        <View style={baseStyles.phoneContainer}>
                            <Input
                                {...phone}
                                nativeProps={{
                                    keyboardType: "number-pad",
                                    maxLength: 12,
                                }}
                            />
                        </View>
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
