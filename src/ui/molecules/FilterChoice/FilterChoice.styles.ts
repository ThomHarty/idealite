import { StyleSheet } from "react-native";

import { COLORS } from "../../../theme";
import { FilterChoiceStyles } from "./FilterChoice.types";

export const baseStyles: FilterChoiceStyles = StyleSheet.create({
    container: {
        width: 240,
        height: 34,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        flexDirection: "row",
        alignSelf: "center",
    },
    textContainer: {
        width: 120,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    tabContainer: {
        width: 120,
        height: 34,
        borderRadius: 17,
        backgroundColor: COLORS.PRIMARY,
        position: "absolute",
    },
});
