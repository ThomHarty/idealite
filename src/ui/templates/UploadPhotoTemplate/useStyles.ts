import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { UploadPhotoTemplateStyles } from "./UploadPhotoTemplate.types";

export const useStyles = (): UploadPhotoTemplateStyles => {
    const { height } = useWindowDimensions();
    const { bottom } = useSafeAreaInsets();
    
    const baseStyles: UploadPhotoTemplateStyles = {
        container: {
            flex: 1,
        },
        linkContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingBottom: bottom,
            alignItems: "center",
        },
        link: {
            textAlign: "center",
        },
        centerContainer: {
            paddingRight: 34,
            paddingLeft: 34,
            justifyContent: "center",
            height: height - 300,
        },
        headingContainer: {
            marginBottom: 24,
        },
        infoContainer: {

        },
        avatarContainer: {
            marginBottom: 24,
        },
        iconContainer: {
            position: "absolute",
            left: 40,
            bottom: 24,
        },
        buttonContainer: {
            paddingRight: 18,
            paddingLeft: 18,
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingBottom: bottom,
        },
    };

    return baseStyles;
};
