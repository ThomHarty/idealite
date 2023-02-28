import { Context, createContext } from "react";
import { ThemeType } from "./theme.type";

interface Theme {
    theme: ThemeType;
    changeTheme: (value: ThemeType) => void;
};

export const ThemeContext: Context<Theme> = createContext({} as Theme);
