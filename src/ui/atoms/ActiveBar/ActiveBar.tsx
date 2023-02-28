import { memo, ReactElement } from "react";
import Animated from "react-native-reanimated";

import { IActiveBarProps } from "./ActiveBar.types";
import { baseStyles } from "./ActiveBar.styles";
import { useLayoutStyles } from "./animations";

export const ActiveBar = memo(({
    active = false,
}: IActiveBarProps): ReactElement => {
    const { layout } = useLayoutStyles({active});
    return (
        <Animated.View testID="active-bar" style={[
            baseStyles.bar,
            layout.bar,
        ]} />
    )
});
