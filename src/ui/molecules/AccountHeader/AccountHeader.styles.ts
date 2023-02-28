import { StyleSheet } from "react-native";
import { COLORS } from "../../../theme";
import { AccountHeaderStyles } from "./AccountHeader.types";

export const baseStyles: AccountHeaderStyles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingRight: 34,
        paddingBottom: 24,
        paddingLeft: 34,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 14,
    },
    topLeftContainer: {
        flexDirection: "row",
    },
    nameContainer: {
        marginLeft: 17,
        paddingTop: 3,
        paddingBottom: 3,
    },
    titleContainer: {
        marginLeft: 17,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 7,
    },
    icon: {
        color: COLORS.ACCENT_ONE,
        marginRight: 14,
    },
    iconSize: {
        fontSize: 18,
    },
    moreIcon: {
        color: COLORS.PRIMARY,
        marginRight: 8,
    },
    moreIconSize: {
        fontSize: 5,
    },
});
