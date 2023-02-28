import React, { ReactElement } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { CarouselOne } from "../../../theme/svg";
import { Button, Typography } from "../../atoms";
import { LogoHeader } from "../../molecules";
import { IForgotHelpTemplateProps } from "./ForgotHelpTemplate.types";
import { useStyles } from "./useStyles";

export const ForgotHelpTemplate = ({
    onPressBack,
    onPressNext,
}: IForgotHelpTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <Pressable onPress={Keyboard.dismiss}>
            <LogoHeader onPressBack={onPressBack}>
                <View style={baseStyles.container}>
                    <View />
                    <View style={baseStyles.centerContainer}>
                        <View style={baseStyles.svgContainer}>
                            <CarouselOne />
                        </View>
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="Please get in touch to recover your account"
                                size="heading2"
                            />
                        </View>
                        <View style={baseStyles.infoContainer}>
                            <Typography
                                text="Contact help@idealite.app for assistance with signing in"
                                size="text"
                            />
                        </View>
                    </View>
                    <View style={baseStyles.buttonContainer}>
                        <Button
                            text="Go back"
                            onPress={onPressNext}
                            variant="secondary"
                            icon="left-chevron"
                        />
                    </View>
                </View>
            </LogoHeader>
        </Pressable>
    )
};
