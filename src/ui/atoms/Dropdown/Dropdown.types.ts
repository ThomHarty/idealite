import { TextStyle, ViewStyle } from "react-native";

export interface IDropdownProps {
    label?: string;
    selected?: DropdownItem;
    items: DropdownItem[];
    disabled?: boolean;
    onItemSelected: (item: DropdownItem) => void;
    selectText?: string;
}

export type DropdownItem = {
    key: string;
    value: string;
}

export interface DropdownStyles {
    label?: TextStyle;
    selectedContainer?: ViewStyle;
    selectedText?: TextStyle;
    iconContainer?: ViewStyle;
    icon?: TextStyle;
    dropdownContainer?: ViewStyle;
    dropdownWrapper?: ViewStyle;
    selectedValueContainer?: ViewStyle;
    selectedValueText?: TextStyle;
    itemContainer?: ViewStyle;
    itemText?: TextStyle;
    flatlistContainer?: ViewStyle;
}
