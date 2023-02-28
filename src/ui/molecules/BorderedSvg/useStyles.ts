import { StyleSheet } from "react-native";
import { BorderedSvgStyles, IBorderedSvgProps } from "./BorderedSvg.types";

export const useStyles = (size: IBorderedSvgProps["size"]) => {
    const baseStyles: BorderedSvgStyles = StyleSheet.create({
        container: {
            borderWidth: size === "large" ? 2 : 1,
            width: size === "large" ? 146 : 68,
            height: size === "large" ? 162 : 72,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        svgContainer: {
            
        },
        textContainer: {
            position: "relative",
        },
    });

    return baseStyles;
};
