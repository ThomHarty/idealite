import { TextStyle, ViewStyle } from "react-native";

import { IImageProps } from "../../atoms";

export interface IUploadPhotoTemplateProps {
    onPressSkip: () => void;
    onPressUpload: () => void;
    onPressNext: () => void;
    avatar?: IImageProps["src"];
};

export interface UploadPhotoTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    linkContainer?: ViewStyle;
    link?: TextStyle;
    centerContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    infoContainer?: ViewStyle;
    avatarContainer?: ViewStyle;
    iconContainer?: ViewStyle;
};
