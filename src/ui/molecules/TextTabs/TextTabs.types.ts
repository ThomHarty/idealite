import { ReactElement } from "react";
import { ViewStyle } from "react-native";

export type TabNumbers = 1 | 2 | 3 | 4;

export interface TabHeader {
    tab: TabNumbers;
    name: "Bio" | "Idea" | "Skills" | "Experience";
};

export interface ITextTabsProps {
    initial?: TabNumbers;
    tabOneContent: ReactElement | ReactElement[];
    tabTwoContent: ReactElement | ReactElement[];
    tabThreeContent: ReactElement | ReactElement[];
    tabFourContent: ReactElement | ReactElement[];
};

export interface TextTabsStyles {
    container?: ViewStyle;
    tabContainer?: ViewStyle;
    textContainer?: ViewStyle;
    contentContainer?: ViewStyle;
    contentTabContainer?: ViewStyle;
};
