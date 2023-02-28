import React, { ReactElement } from "react";
import { Text, View } from "react-native";
import { Icon } from "../../../shared/components";
import { Typography } from "../../atoms";
import { useStyles } from "./useStyles";

export const FeedWelcomeCard = (): ReactElement => {
    const baseStyles = useStyles();
    
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.iconContainer}>
                <Icon name="cards" iconStyles={baseStyles.icon} />
            </View>
            <Text style={baseStyles.headingContainer}>
                <Typography
                    size="cta"
                    text="Welcome to your feed!"
                />
            </Text>
            <Text style={baseStyles.infoContainer}>
                <Typography
                    size="tiny"
                    text="Here you can find people and connect with them!"
                />
            </Text>
        </View>
    );
};
