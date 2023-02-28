import { TextStyle, ViewStyle } from "react-native";

export interface ISwipeIconsProps {
    leftOnPress?: () => void;
    rightOnPress?: () => void;
    showSwipeIcons?: boolean;
    iconStyle?: AnimatedStyles;
    tickStyle?: AnimatedStyles;
    crossStyle?: AnimatedStyles;
};

interface AnimatedStyles {
    opacity: number;
};

export interface SwipeIconsStyles {
    iconsContainer?: ViewStyle;
    icon?: TextStyle;
    moreIcon?: TextStyle;
    filterIcon?: TextStyle;
    flatIcon?: TextStyle;
    tickIcon?: TextStyle;
    crossIcon?: TextStyle;
};
