import React, { ReactElement } from "react";
import { ScrollView, View } from "react-native";
import { Button, Typography } from "../../atoms";
import { TextHeader } from "../../molecules";

import { ISendNDATemplateProps } from "./SendNDATemplate.types";
import { useStyles } from "./useStyles";

export const SendNDATemplate = ({
    onPressBack,
    onPressSend,
    ndaText,
}: ISendNDATemplateProps): ReactElement => {
    const baseStyles = useStyles();

    return (
        <View style={baseStyles.container}>
            <TextHeader text="Send NDA" onPressBack={onPressBack}>
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={baseStyles.headingContainer}>
                        <Typography
                            text="Non-disclosure agreement"
                            size="heading1"
                        />
                    </View>
                    <View style={baseStyles.textContainer}>
                        <Typography
                            text={ndaText}
                            size="small"
                        />
                    </View>
                </ScrollView>
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button text="Send" onPress={onPressSend} />
                </View>
                <Button
                    text="Go back"
                    onPress={onPressBack}
                    variant="secondary"
                />
            </View>
        </View>
    );
};
