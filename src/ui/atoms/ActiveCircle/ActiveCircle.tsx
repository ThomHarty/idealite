import { memo, ReactElement } from "react";
import Animated from "react-native-reanimated";

import { IActiveCircleProps } from "./ActiveCircle.types";
import { baseStyles } from "./ActiveCircle.styles";
import { useActiveColors } from "./animations";

export const ActiveCircle = memo(({
    active = false,
}: IActiveCircleProps): ReactElement => {
    const { activeColors } = useActiveColors({active});
    return (
        <Animated.View testID="active-circle" style={[
            baseStyles.circle,
            activeColors.circle,
        ]} />
    )
});
