import React, { ReactElement } from "react";
import LinearGradient from "react-native-linear-gradient";

import { COLORS } from "../../../theme";
import { baseStyles } from "./LinearBackground.styles";
import { ILinearBackgroundProps } from "./LinearBackground.types";

export const LinearBackground = ({
    children,
    borderRadius = 0,
}: ILinearBackgroundProps): ReactElement => {
    return (
            <LinearGradient
                colors={[COLORS.ACCENT_TWO, COLORS.ACCENT_ONE, COLORS.ACCENT_ONE]}
                style={[
                    baseStyles.container,
                    { borderRadius: borderRadius }
                ]}
            >
                {children}
            </LinearGradient>
    );
};
