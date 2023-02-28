import React, { ReactElement } from "react";
import { Text, View } from "react-native";

import { Swipe, Tap } from "../../../theme/svg";
import { Typography } from "../../atoms";
import { useStyles } from "./useStyles";

export const FeedInstructionsCard = (): ReactElement => {
    const baseStyles = useStyles();
    
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.halfContainer}>
                <View style={baseStyles.iconContainer}>
                    <Tap />
                </View>
                <Text style={baseStyles.headingContainer}>
                    <Typography
                        size="small"
                        text="Tap here to view profile"
                    />
                </Text>
            </View>
            <View style={baseStyles.dividerContainer}>
                <View style={baseStyles.divider} />
            </View>
            <View style={baseStyles.halfContainer}>
                <View style={baseStyles.iconContainer}>
                    <Swipe />
                </View>
                <Text style={baseStyles.headingContainer}>
                    <Typography
                        size="small"
                        text="Swipe here to view profiles"
                    />
                </Text>
            </View>
        </View>
    );
};
