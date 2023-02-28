import React, { memo, ReactElement } from "react";
import { View, Image as RNImage } from "react-native";

import { IAvatarStatusProps } from "./AvatarStatus.types";
import { baseStyles } from "./AvatarStatus.styles";
import { Image, OnlineCircle } from "../../atoms";

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const AvatarStatus = memo(({
    avatar,
    online,
    testID,
}: IAvatarStatusProps): ReactElement => {
    return (
        <View style={baseStyles.container} testID={testID || "avatar-status"}>
            <Image src={avatar || DEFAULT_IMAGE} size="avatarMedium" />
            <View style={baseStyles.statusContainer}>
                <OnlineCircle online={online} />
            </View>
        </View>
    )
});
