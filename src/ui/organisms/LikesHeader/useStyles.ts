import { LikesHeaderStyles } from "./LikesHeader.types";

export const useStyles = () => {
    const baseStyles: LikesHeaderStyles = {
        container: {
            
        },
        headingContainer: {
            paddingTop: 24,
            paddingRight: 18,
            paddingBottom: 24,
            paddingLeft: 18,
        },
        subHeadingContainer: {
            paddingRight: 18,
            paddingBottom: 9,
            paddingLeft: 18,
        },
    };

    return baseStyles;
};
