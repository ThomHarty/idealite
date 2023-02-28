import { ReactElement } from "react";
import { ViewStyle } from "react-native";

export type TabNumbers = 1 | 2 | 3;

export interface IIconTabsProps {
    initial?: TabNumbers;
    tabOneContent: ReactElement | ReactElement[];
    tabOneUnread?: boolean;
    tabTwoContent: ReactElement | ReactElement[];
    tabTwoUnread?: boolean;
    tabThreeContent: ReactElement | ReactElement[];
    interests?: boolean;
    onTabChanged?: (tab: number) => void;
};

export interface IconTabsStyles {
    container?: ViewStyle;
    tabContainer?: ViewStyle;
    contentContainer?: ViewStyle;
    contentTabContainer?: ViewStyle;
};
