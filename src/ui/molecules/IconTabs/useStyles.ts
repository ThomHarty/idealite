import { useWindowDimensions } from 'react-native';

import { COLORS } from '../../../theme';
import { IconTabsStyles } from "./IconTabs.types";

export const useStyles = () => {
    const { width } = useWindowDimensions();

    const baseStyles: IconTabsStyles = {
        container: {
            width,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.BORDER,
            marginBottom: 2,
        },
        tabContainer: {
            height: 50,
            width: width / 3,
            alignItems: "center",
            justifyContent: "center",
        },
        contentContainer: {
            width: width * 3,
            flexDirection: "row",
            flexGrow: 1,
        },
        contentTabContainer: {
            width,
        },
    };

    return baseStyles;
};
