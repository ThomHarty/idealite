import { ViewStyle } from "react-native";

import { IImageProps } from "../../atoms";

export interface IAddSkillsPromptTemplateProps {
    onPressBack: () => void;
    onPressYes: () => void;
    onPressNo: () => void;
    avatar: IImageProps["src"];
};

export interface AddSkillsPromptTemplateStyles {
    container?: ViewStyle;
    buttonContainer?: ViewStyle;
    topButtonContainer?: ViewStyle;
    centerContainer?: ViewStyle;
    svgContainer?: ViewStyle;
    avatarContainer?: ViewStyle;
};
