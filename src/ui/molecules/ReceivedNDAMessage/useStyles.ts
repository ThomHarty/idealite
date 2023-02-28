import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";
import { ReceivedNDAMessageStyles } from "./ReceivedNDAMessage.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: ReceivedNDAMessageStyles = StyleSheet.create({
        container: {
            paddingTop: 8,
            paddingBottom: 8,
            flexDirection: "row",
        },
        messageContainer: {
            maxWidth: width - 86,
            backgroundColor: COLORS.WHITE,
            borderWidth: 1,
            borderColor: COLORS.BORDER,
            borderRadius: 25,
            padding: 16,
        },
        headingWrapper: {
            marginBottom: 12,
        },
        messageWrapper: {
            marginTop: 12,
            marginBottom: 12,
        },
        footerWrapper: {
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 4,
        },
        avatarContainer: {
            marginLeft: 18,
            marginRight: 8,
        },
        readContainer: {
            marginRight: 54,
            alignItems: "flex-end",
            marginTop: -4,
            marginBottom: 8,
        },
    });

    return baseStyles;
}
