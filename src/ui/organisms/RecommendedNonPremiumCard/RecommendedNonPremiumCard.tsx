import React, { ReactElement } from "react";
import { Text, View } from "react-native";

import { Recommendations } from "../../../theme/svg";
import { Button, LinearBackground, Typography } from "../../atoms";
import { IRecommendedNonPremiumCardProps } from "./RecommendedNonPremiumCard.types";
import { useStyles } from "./useStyles";

export const RecommendedNonPremiumCard = ({
    onPressJoinNow,
}: IRecommendedNonPremiumCardProps): ReactElement => {
    const baseStyles = useStyles();

    return (
        <View style={baseStyles.container}>
            <LinearBackground>
                <View style={baseStyles.wrapper}>
                    {/* icon */}
                    <View style={baseStyles.iconContainer}>
                        <Recommendations />
                    </View>
                    {/* heading */}
                    <Text style={baseStyles.headingContainer}>
                        <Typography
                            size="heading3"
                            text="See who swiped you"
                        />
                    </Text>
                    {/* sub heading */}
                    <Text style={baseStyles.subHeadingContainer}>
                        <Typography
                            size="text"
                            text="for only £6.99 p/m"
                        />
                    </Text>
                    {/* info */}
                    <Text style={baseStyles.infoContainer}>
                        <Typography
                            size="tiny"
                            text="Join the thousands of people signing up to Idealite Premium"
                        />
                    </Text>
                    {/* bottom */}
                    <View style={baseStyles.bottomContainer}>
                        {/* button */}
                        <View style={baseStyles.buttonContainer}>
                            <Button text="Join now" onPress={onPressJoinNow} />
                        </View>
                    </View>
                </View>
            </LinearBackground>
        </View>
    );
};
