import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { CheckboxStyles } from "./Checkbox.types";

export const baseStyles: CheckboxStyles = StyleSheet.create({
    wrapper: {
        width: 30,
    },
    container: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
        overflow: "hidden"
    },
    center: {
        width: 26,
        height: 26,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: COLORS.PRIMARY,
        fontSize: 13,
    }
});
