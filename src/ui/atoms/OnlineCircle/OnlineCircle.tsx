import { memo, ReactElement } from "react";
import Animated from "react-native-reanimated";

import { IOnlineCircleProps } from "./OnlineCircle.types";
import { baseStyles } from "./OnlineCircle.styles";
import { useOnlineColors } from "./animations";

export const OnlineCircle = memo(({
    online = false,
}: IOnlineCircleProps): ReactElement => {
    const { onlineColors } = useOnlineColors({online});
    return (
        <Animated.View testID="online-circle" style={[
            baseStyles.circle,
            onlineColors.circle,
        ]} />
    )
});
