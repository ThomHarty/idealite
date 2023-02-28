import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { RadioButtonStyles } from "./RadioButton.types";

export const baseStyles: RadioButtonStyles = StyleSheet.create({
    wrapper: {
        width: 30,
    },
    container: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 30 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        backgroundColor: COLORS.PRIMARY,
    },
});
