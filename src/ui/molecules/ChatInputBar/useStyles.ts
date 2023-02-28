import { StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { ChatInputBarStyles } from "./ChatInputBar.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: ChatInputBarStyles = StyleSheet.create({
        container: {
            backgroundColor: COLORS.WHITE,
            width: "100%",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            flexDirection: "row",
            paddingTop: 14,
            paddingRight: 18,
            paddingBottom: 16,
            paddingLeft: 18,
            // shadow
            shadowColor: COLORS.BLACK,
            shadowOffset: {
                width: 0,
                height: -2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
        },
        iconContainer: {
            marginRight: 7,
        },
        input: {
            backgroundColor: COLORS.BORDER,
            marginLeft: 7,
            borderRadius: 20,
            position: "relative",
            top: 3,
            paddingTop: 11,
            paddingBottom: 11,
            paddingLeft: 18,
            paddingRight: 46,
            width: width - (132),
            color: COLORS.PRIMARY,
            fontSize: 16,
        },
        chatIconContainer: {
            position: "absolute",
            right: 18,
            top: 15,
        },
    });

    return baseStyles;
};
