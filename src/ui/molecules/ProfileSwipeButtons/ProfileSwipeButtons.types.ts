import { ViewStyle } from "react-native";

export interface IProfileSwipeButtonsProps {
    onPressCross: () => void;
    onPressStar: () => void;
    onPressTick: () => void;
};

export interface ProfileSwipeButtonsStyles {
    container?: ViewStyle;
};
