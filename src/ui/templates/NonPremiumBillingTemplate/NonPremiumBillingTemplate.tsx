import React, { ReactElement } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button } from "../../atoms";
import { TextHeader } from "../../molecules";
import { TryPremiumBanner } from "../../organisms";
import { INonPremiumBillingTemplateProps } from "./NonPremiumBillingTemplate.types";
import { useStyles } from "./useStyles";

export const NonPremiumBillingTemplate = ({
    onPressBack,
    onPressSignUp,
}: INonPremiumBillingTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Premium & Billing">
                <TryPremiumBanner onPress={onPressSignUp} />
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <Button text="Sign up to Premium" onPress={onPressSignUp} />
            </View>
        </Pressable>
    )
};
