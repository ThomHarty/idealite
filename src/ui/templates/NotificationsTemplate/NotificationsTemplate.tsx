import React, { ReactElement } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, Typography } from "../../atoms";

import { SwitchNavItem, TextHeader } from "../../molecules";
import { INotificationsTemplateProps } from "./NotificationsTemplate.types";
import { useStyles } from "./useStyles";

export const NotificationsTemplate = ({
    onPressBack,
    push,
    email,
}: INotificationsTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <View style={baseStyles.container}>
                <TextHeader onPressBack={onPressBack} text="Notifications">
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={baseStyles.headingContainer}>
                            <Typography text="Push Notifications" size="cta" />
                        </View>
                        <Divider />
                        <SwitchNavItem {...push.insights} />
                        <SwitchNavItem {...push.newMatches} />
                        <SwitchNavItem {...push.newMessages} />
                        <SwitchNavItem {...push.superLikes} />
                        <SwitchNavItem {...push.recommendations} />
                        <View style={baseStyles.headingContainer}>
                            <Typography text="Email Notifications" size="cta" />
                        </View>
                        <Divider />
                        <SwitchNavItem {...email.newMatches} />
                        <SwitchNavItem {...email.newMessages} />
                        <SwitchNavItem {...email.promotions} />
                    </ScrollView>
                </TextHeader>
        </View>
    )
};
