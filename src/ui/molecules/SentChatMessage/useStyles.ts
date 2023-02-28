import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";
import { SentChatMessageStyles } from "./SentChatMessage.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: SentChatMessageStyles = StyleSheet.create({
        container: {
            paddingTop: 8,
            paddingBottom: 8,
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        messageContainer: {
            maxWidth: width - 86,
            backgroundColor: COLORS.ACCENT_TWO,
            borderWidth: 1,
            borderColor: COLORS.ACCENT_TWO,
            borderRadius: 25,
            padding: 16,
        },
        avatarContainer: {
            marginLeft: 8,
            marginRight: 18,
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
