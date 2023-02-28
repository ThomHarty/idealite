import { TextProps, TextStyle } from "react-native";

export type Size = "heading1" 
                   | "heading2" 
                   | "heading3" 
                   | "cta" 
                   | "text"
                   | "small"
                   | "tiny"
                   | "tiniest";

export interface ITypographyProps {
    text: string;
    size?: Size;
    animate?: AnimateProps;
    color?: string;
    lineHeight?: number;
    nativeProps?: TextProps;
};

export interface TypographyStyles {
    text?: TextStyle;
};

export interface AnimateProps {
    zero: string;
    one: string;
    check: boolean;
};
