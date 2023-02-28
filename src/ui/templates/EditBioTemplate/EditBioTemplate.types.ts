import { ViewStyle } from "react-native";
import { ITextAreaProps } from "../../atoms";

export interface IEditBioTemplateProps {
    onPressBack: () => void;
    onPressUpdate: () => void;
    onPressCancel: () => void;
    name: string;
    textArea: ITextAreaProps;
};

export interface EditBioTemplateStyles {
    container?: ViewStyle;
    headingContainer?: ViewStyle;
    textAreaContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
};
