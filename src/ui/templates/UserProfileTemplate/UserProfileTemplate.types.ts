import { TextStyle, ViewStyle } from "react-native";

import { ILogoHeaderProps, IProfileHeaderProps, IProfileSwipeButtonsProps } from "../../molecules";

export interface IUserProfileTemplateProps {
    onPressBack: ILogoHeaderProps["onPressBack"];
    profileHeader: IProfileHeaderProps;
    bio: string;
    showSwipeButtons?: boolean;
    profileSwipeButtons?: IProfileSwipeButtonsProps;
    idea: { title: string; body: string; };
    skills: { id: string; title: string }[];
    experience: {
        id: string;
        title: string;
        company: string;
        date: string;
    }[];
    editMode?: boolean;
    onPressEditProfile?: () => void;
    onPressEditBio?: () => void;
    onPressEditIdea?: () => void;
    onPressEditSkill?: (id: string) => void;
    onPressAddSkill?: () => void;
    onPressEditExperience?: (id: string) => void;
    onPressAddExperience?: () => void;
};

export interface UserProfileTemplateStyles {
    container?: ViewStyle;
    tabsContainer?: ViewStyle;
    bioContainer?: ViewStyle;
    headingContainer?: ViewStyle;
    textContainer?: ViewStyle;
    swipeButtonsContainer?: ViewStyle;
    editButtonContainer?: ViewStyle;
    editIconContainer?: ViewStyle;
    editIcon?: TextStyle;
    addButtonContainer?: ViewStyle;
};
