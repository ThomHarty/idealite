import { StyleSheet } from "react-native";

import { COLORS } from "../../../theme";
import { NDAInviteResponseStyles } from "./NDAInviteResponse.types";

export const baseStyles: NDAInviteResponseStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    dividerContainer: {
        opacity: 0.75,
        position: "absolute",
        top: 29,
        width: "100%",
    },
    textContainer: {
        backgroundColor: COLORS.GREY_LIGHT,
        paddingRight: 18,
        paddingLeft: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    tick: {
        marginRight: 8,
        color: COLORS.SUCCESS,
        fontSize: 13,
    },
    cross: {
        marginRight: 8,
        color: COLORS.DANGER,
        fontSize: 13,
    },
});
