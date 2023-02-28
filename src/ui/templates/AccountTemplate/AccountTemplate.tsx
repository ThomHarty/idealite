import React, { ReactElement } from "react";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { AccountHeader, ArrowNavItem } from "../../molecules";
import { TryPremiumBanner } from "../../organisms";
import { IAccountTemplateProps } from "./AccountTemplate.types";
import { useStyles } from "./useStyles";

export const AccountTemplate = ({
    accountHeader,
    onPressAccount,
    onPressNotifications,
    onPressBilling,
    onPressPromotions,
    onPressHelp,
    onPressPrivacy,
    onPressTerms,
    onPressContact,
    onPressLogOut,
    tryPremium,
}: IAccountTemplateProps): ReactElement => {
    const baseStyles = useStyles();

    return (
        <View style={baseStyles.container}>
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                    <AccountHeader {...accountHeader} />
                    <TryPremiumBanner {...tryPremium} />
                    <ArrowNavItem text="Account" onPress={onPressAccount} />
                    <ArrowNavItem text="Notifications" onPress={onPressNotifications} />
                    <ArrowNavItem text="Premium & Billing" onPress={onPressBilling} />
                    <ArrowNavItem text="Promotions" onPress={onPressPromotions} />
                    <ArrowNavItem text="Help Centre" onPress={onPressHelp} />
                    <ArrowNavItem text="Privacy Policy" onPress={onPressPrivacy} />
                    <ArrowNavItem text="Terms & Conditions" onPress={onPressTerms} />
                    <ArrowNavItem text="Contact Us" onPress={onPressContact} />
                    <ArrowNavItem text="Log Out" onPress={onPressLogOut} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};
