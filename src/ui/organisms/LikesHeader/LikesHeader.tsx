import React, { ReactElement } from "react";
import { View } from "react-native";

import { COLORS } from "../../../theme";
import { Typography } from "../../atoms";
import { ILikesHeaderProps } from "./LikesHeader.types";
import { useStyles } from "./useStyles";

export const LikesHeader = ({
    heading,
    subHeading,
}: ILikesHeaderProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <View>
            <View style={baseStyles.headingContainer}>
                <Typography text={heading} size="heading3" />
            </View>
            {subHeading && (
                <View style={baseStyles.subHeadingContainer}>
                    <Typography text={subHeading} size="small" color={COLORS.GREY_DARK} />
                </View>
            )}
        </View>
    );
};
