import { ViewStyle } from "react-native";

export interface IFilterChoiceProps {
    initial?: Active;
    onTabChanged: (active: Active) => void;
};

export interface FilterChoiceStyles {
    container?: ViewStyle;
    textContainer?: ViewStyle;
    tabContainer?: ViewStyle;
};

export type Active = "Ideas" | "Skills";
