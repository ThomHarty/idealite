import { COLORS } from "../../../theme";
import { FeedFiltersTemplateStyles } from "./FeedFiltersTemplate.types";

export const useStyles = () => {
    const baseStyles: FeedFiltersTemplateStyles = {
        container: {
            flex: 1,
            backgroundColor: COLORS.WHITE,
        },
        wrapper: {
            flex: 1,
            paddingRight: 34,
            paddingLeft: 34,
        },
        headingContainer: {
            marginBottom: 16,
        },
        filterChoiceContainer: {
            marginBottom: 36,
            alignSelf: "flex-start",
        },
        tagsContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 30,
        },
        chipContainer: {
            marginRight: 6,
            marginBottom: 6,
        },
        seeMoreContainer: {
            width: "100%",
            marginTop: 6,
        },
        distanceTextContainer: {
            marginTop: 9,
            flexDirection: "row",
            flexWrap: "wrap",
        },
        buttonsContainer: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingLeft: 34,
            paddingRight: 34,
            paddingBottom: 17,
            paddingTop: 17,
            backgroundColor: COLORS.WHITE,
        },
        firstButtonContainer: {
            marginBottom: 12,
        },
    };

    return baseStyles;
};
