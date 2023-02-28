import { TextStyle, ViewStyle } from "react-native";

export interface IEditNavItemProps {
    id: string;
    text: string;
    subText?: string;
    details?: string;
    onPress?: (id: string) => void;
    disabledEdit?: boolean;
};

export interface EditNavItemStyles {
    container?: ViewStyle;
    subTextContainer?: ViewStyle;
    detailsContainer?: ViewStyle;
    icon?: TextStyle;
};
