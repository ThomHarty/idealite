import { ReactElement } from "react";

export interface IOnPressProps {
    children: ReactElement | ReactElement[];
    onPress: () => void;
}
