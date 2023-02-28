import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { ChatDayDividerStyles } from "./ChatDayDivider.types";

export const baseStyles: ChatDayDividerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 41,
        justifyContent: "center",
        alignItems: "center",
    },
    dividerContainer: {
        opacity: 0.75,
        position: "absolute",
        top: 21,
        width: "100%",
    },
    textContainer: {
        backgroundColor: COLORS.GREY_LIGHT,
        paddingRight: 18,
        paddingLeft: 18,
    },
});
