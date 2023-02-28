import { TextStyle } from "react-native";

export interface IIconProps {
    name: Icon;
    iconStyles?: TextStyle;
    testID?: string;
}

type Icon = "calendar"
            | "cards"
            | "cloud"
            | "cross"
            | "down-chevron"
            | "download"
            | "edit"
            | "left-chevron"
            | "location"
            | "more"
            | "person"
            | "photo"
            | "plus"
            | "right-chevron"
            | "speech"
            | "star"
            | "swipe"
            | "tick"
            | "up-chevron"
            | "visibility"
            | "warning"
            | "block"
            | "camera"
            | "document"
            | "envelope"
            | "paperclip"
            | "picture"
            | "rewind"
            | "sent"
            | "speech-bold"
            | "bin"
            | "disable-card"
            | "filter"
            | "heart"
            | "lightbulb"
            | "paper"
            | "upload";