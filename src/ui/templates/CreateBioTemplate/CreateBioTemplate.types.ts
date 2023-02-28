import { TextStyle, ViewStyle } from "react-native";

import { IImageProps, IInputProps, ITextAreaProps } from "../../atoms";

export interface ICreateBioTemplateProps {
    onPressNext: () => void;
    onPressBack: () => void;
    onPressSkip: () => void;
    location: IInputProps;
    bio: ITextAreaProps;
    avatar: IImageProps["src"];
};

export interface CreateBioTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    inputContainer?: ViewStyle;
    linkContainer?: ViewStyle;
    link?: TextStyle;
    avatarContainer?: ViewStyle;
    bioContainer?: ViewStyle;
};
