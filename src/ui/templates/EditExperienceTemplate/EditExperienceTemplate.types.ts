import { ViewStyle } from "react-native";

import { ICheckboxProps, IDropdownProps, IInputProps } from "../../atoms";

export interface IEditExperienceTemplateProps {
    onPressUpdate: () => void;
    onPressBack: () => void;
    onPressCancel: () => void;
    title: IInputProps;
    institution: IInputProps;
    current: ICheckboxProps;
    start: IDropdownProps;
    end: IDropdownProps;
};

export interface EditExperienceTemplateStyles {
    container?: ViewStyle;
    inputContainer?: ViewStyle;
    secondInputContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
    checkboxContainer?: ViewStyle;
    checkboxTextContainer?: ViewStyle;
    dropdownsContainer?: ViewStyle;
    dropdownWrapper?: ViewStyle;
};
