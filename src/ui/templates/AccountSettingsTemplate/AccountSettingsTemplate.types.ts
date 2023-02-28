import { TextStyle, ViewStyle } from "react-native";

export interface IAccountSettingsTemplateProps {
    onPressBack: () => void;
    avatar: string;
    name: string;
    email: string;
    telephone: {
        code: string;
        number: string;
    },
    onPressTelephone: () => void;
    dob: {
        day: string;
        month: string;
        year: string;
    },
    onPressDob: () => void;
    onPressChangePassword: () => void;
    onPressDeleteAccount: () => void;
};

export interface AccountSettingsTemplateStyles {
    container?: ViewStyle;
    topContainer?: ViewStyle;
    nameContainer?: ViewStyle;
    itemContainer?: ViewStyle;
    fakeEmailInputContainer?: ViewStyle;
    telephoneLabel?: ViewStyle;
    telephoneIconContainer?: ViewStyle;
    fakeTelephoneInputContainer?: ViewStyle;
    codeContainer?: ViewStyle;
    numberContainer?: ViewStyle;
    fakeInputContainer?: ViewStyle;
    fakeInputIconContainer?: ViewStyle;
    fakeInputIcon?: TextStyle;
    dobContainer?: ViewStyle;
    navItemContainer?: ViewStyle;
};
