import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { UserRoleTemplateStyles } from "./UserRoleTemplate.types";

export const useStyles = (): UserRoleTemplateStyles => {
    const { height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    
    const baseStyles: UserRoleTemplateStyles = {
        container: {
            flex: 1,
        },
        buttonContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingBottom: bottom,
        },
        centerContainer: {
            paddingRight: 34,
            paddingLeft: 34,
            justifyContent: "center",
            height: height - 300,
        },
        headingContainer: {
            marginBottom: 17,
        },
        avatarContainer: {
            marginTop: 24,
            marginBottom: 24,
        },
        selectContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        itemContainer: {
            marginTop: 34,
        },
        itemTextContainer: {
            marginTop: 17,
        },
        textContainer: {
            marginTop: 34,
        },
    };

    return baseStyles;
};
