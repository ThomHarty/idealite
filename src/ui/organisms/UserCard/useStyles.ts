import { StyleSheet, useWindowDimensions } from "react-native";

import { UserCardStyles } from "./UserCard.types";

export const useStyles = () => {
    const { width, height } = useWindowDimensions();

    const breakpoint = 600;
    const smallScreen = height < breakpoint;
    const smallScreenCardHeightHalf = height * 0.275;
    const largeScreenCardHeightHalf = height * 0.295;

    const baseStyles: UserCardStyles = StyleSheet.create({
        container: {
            borderRadius: 20,
            width: width - 36,
            position: "absolute",
        },
        topHalfContainer: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: smallScreen ? smallScreenCardHeightHalf : largeScreenCardHeightHalf,
            justifyContent: "flex-end",
            paddingBottom: height * 0.015,
        },
        svgContainer: {
            width: "100%",
            height: smallScreen ? height * 0.11 : height * 0.13,
            alignItems: "center",
        },
        bottomHalfContainer: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: smallScreen ? smallScreenCardHeightHalf : largeScreenCardHeightHalf,
            overflow: "hidden",
        },
        blurbContainer: {
            padding: 24,
            paddingTop: 12,
            paddingBottom: 75,
        },
        tagsContainer: {
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 24,
            flexDirection: "row",
            position: "absolute",
            bottom: 0,
        },
        tag: {
            marginRight: 12,
        },
    });

    return baseStyles;
}