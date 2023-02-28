import { useWindowDimensions } from "react-native";

import { TextTabsStyles } from "./TextTabs.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();
    
    const baseStyles: TextTabsStyles = {
        container: {
            width,
            flexDirection: "row",
            justifyContent: "space-around",
            paddingBottom: 2,
        },
        tabContainer: {
            
        },
        textContainer: {
            padding: 5,
        },
        contentContainer: {
            width: width * 4,
            flexDirection: "row",
        },
        contentTabContainer: {
            width,
        },
    };

    return baseStyles;
};
