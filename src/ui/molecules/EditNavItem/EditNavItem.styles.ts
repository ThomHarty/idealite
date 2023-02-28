import { StyleSheet } from "react-native";

import { EditNavItemStyles } from "./EditNavItem.types";

export const baseStyles: EditNavItemStyles = StyleSheet.create({
    container: {
        padding: 34,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subTextContainer: {
        marginTop: 8,
    },
    detailsContainer: {
        marginTop: 8,
    },
    icon: {
        fontSize: 18,
    },
});
