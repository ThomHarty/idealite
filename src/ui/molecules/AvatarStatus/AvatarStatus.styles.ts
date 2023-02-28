import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { AvatarStatusStyles } from "./AvatarStatus.types";

export const baseStyles: AvatarStatusStyles = StyleSheet.create({
    container: {
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: COLORS.BRAND_GRADIENT_LIGHT,
    },
    statusContainer: {
        position: "absolute",
        right: 0,
        bottom: 0,
    },
});
