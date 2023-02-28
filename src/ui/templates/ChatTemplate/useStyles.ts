import { useWindowDimensions } from "react-native";
import { COLORS } from "../../../theme";

import { ChatTemplateStyles } from "./ChatTemplate.types";

export const useStyles = () => {
    const { height } = useWindowDimensions();
    const baseStyles: ChatTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.GREY_LIGHT,
            height,
        },
        inputBarContainer: {
            width: "100%",
            position: "absolute",
            bottom: 0,
        },
        chatHeaderContainer: {
            zIndex: 99,
            width: "100%",
            position: "absolute",
            top: 0,
            height: 58,
        },
        messageContainer: {

        },
        flatListContainer: {
            // flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 80,
            paddingTop: 80,
        },
    };

    return baseStyles;
};
