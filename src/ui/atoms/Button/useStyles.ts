import { StyleSheet } from "react-native";
import { ButtonStyles, Variant } from "./Button.types";

export const useStyles = (variant: Variant) => {
    const baseStyles: ButtonStyles = StyleSheet.create({
        button: {
            height: variant === "tertiary" ? 38 : 54,
            width: "100%",
            borderRadius: 500,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
        },
        text: {
            fontSize: variant === "tertiary" ? 16 : 22,
        },
        iconContainer: {
            marginRight: 13,
        },
        icon: {
            fontSize: variant === "tertiary" ? 12 : 18,
        }
    });

    return baseStyles;
}
