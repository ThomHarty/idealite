import React, { ReactElement } from "react";
import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";

import { Icon as IconSvg } from "../../../theme/svg";
import { Icon } from "../../../shared/components";
import { TextHeader } from "../../molecules";
import { IPremiumBillingTemplateProps } from "./PremiumBillingTemplate.types";
import { useStyles } from "./useStyles";
import { Divider, Typography } from "../../atoms";
import { COLORS } from "../../../theme";

export const PremiumBillingTemplate = ({
    onPressBack,
    renewalDate,
}: IPremiumBillingTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
                <TextHeader onPressBack={onPressBack} text="Premium & Billing">
                    {/* top */}
                    <View style={baseStyles.premiumContainer}>
                        {/* svg and icon */}
                        <View style={baseStyles.svgContainer}>
                            <View style={baseStyles.svg}>
                                <IconSvg />
                            </View>
                            <View style={baseStyles.iconContainer}>
                                <Icon name="star" iconStyles={baseStyles.icon} />
                            </View>
                        </View>
                        <View style={baseStyles.premiumHeadingContainer}>
                            <Typography text="Idealite " size="text" />
                            <Typography text="Premium" size="text" color={COLORS.SUCCESS} />
                        </View>
                    </View>
                    <View style={baseStyles.premiumInfoContainer}>
                        <Typography
                            text={`Your plan will automatically renew on ${renewalDate}.`}
                            size="tiny"
                            color={COLORS.GREY_DARK}
                        />
                        <Typography
                            text="You will be charged £9.99 a month."
                            size="tiny"
                            color={COLORS.GREY_DARK}
                        />
                    </View>
                    {/* list */}
                    <View style={baseStyles.premiumListContainer}>
                        <View style={baseStyles.listHeadingContainer}>
                            <Typography text="Premium includes:" size="small" />
                        </View>
                        <View style={baseStyles.listItemContainer}>
                            <View style={baseStyles.listIconContainer}>
                                <Icon name="tick" iconStyles={baseStyles.tick} />
                            </View>
                            <Typography text="Rewind your swipes" size="tiny" />
                        </View>
                        <View style={baseStyles.listItemContainer}>
                            <View style={baseStyles.listIconContainer}>
                                <Icon name="tick" iconStyles={baseStyles.tick} />
                            </View>
                            <Typography text="See more recommendations" size="tiny" />
                        </View>
                        <View style={baseStyles.listItemContainer}>
                            <View style={baseStyles.listIconContainer}>
                                <Icon name="tick" iconStyles={baseStyles.tick} />
                            </View>
                            <Typography text="Lorem ipsum" size="tiny" />
                        </View>
                        <View style={baseStyles.listItemContainer}>
                            <View style={baseStyles.listIconContainer}>
                                <Icon name="tick" iconStyles={baseStyles.tick} />
                            </View>
                            <Typography text="lorem ipsum" size="tiny" />
                        </View>
                    </View>
                    <Divider />
                </TextHeader>
            </Pressable>
        </ScrollView>
    );
};
