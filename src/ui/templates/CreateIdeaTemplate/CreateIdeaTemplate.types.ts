import { TextStyle, ViewStyle } from "react-native";

import { IImageProps, IInputProps, ITextAreaProps } from "../../atoms";

export interface ICreateIdeaTemplateProps {
    onPressNext: () => void;
    onPressBack: () => void;
    name: IInputProps;
    idea: ITextAreaProps;
    avatar: IImageProps["src"];
};

export interface CreateIdeaTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    linkContainer?: ViewStyle;
    link?: TextStyle;
    avatarContainer?: ViewStyle;
    ideaContainer?: ViewStyle;
};
