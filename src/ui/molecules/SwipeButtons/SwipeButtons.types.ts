import { ViewStyle } from "react-native";

export interface ISwipeButtonsProps extends SwipeButtonsAnimationsProps {
    onPressRewind: () => void;
    onPressCross: () => void;
    onPressTick: () => void;
    onPressStar: () => void;
};

export interface SwipeButtonsStyles {
    container?: ViewStyle;
    smallIconContainer?: ViewStyle;
    largeIconContainer?: ViewStyle;
};

export interface SwipeButtonsAnimationsProps {
    isSwipingRight?: boolean;
    isSwipingLeft?: boolean;
    disabled?: boolean;
};
