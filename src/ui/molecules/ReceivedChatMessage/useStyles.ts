import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";
import { ReceivedChatMessageStyles } from "./ReceivedChatMessage.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: ReceivedChatMessageStyles = StyleSheet.create({
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
        avatarContainer: {
            marginLeft: 18,
            marginRight: 8,
        },
        readContainer: {
            marginRight: 54,
            alignItems: "flex-end",
            marginTop: -4,
        },
    });

    return baseStyles;
}
