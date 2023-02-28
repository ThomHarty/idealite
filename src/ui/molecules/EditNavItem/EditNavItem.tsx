import React, { ReactElement } from "react";
import { Pressable, View } from "react-native";

import { IEditNavItemProps } from "./EditNavItem.types";
import { baseStyles } from "./EditNavItem.styles";
import { Divider, Typography } from "../../atoms";
import { Icon } from "../../../shared/components";
import { COLORS } from "../../../theme";

export const EditNavItem = ({
    id,
    text,
    subText,
    details,
    onPress,
    disabledEdit,
}: IEditNavItemProps): ReactElement => {
    return (
        <>
        <Pressable style={baseStyles.container} onPress={(!disabledEdit && onPress) ? () => onPress(id) : undefined}>
            <View>
                <Typography text={text} />
                {subText && (
                    <View style={baseStyles.subTextContainer}>
                        <Typography
                            text={subText}
                            size="small"
                            color={COLORS.GREY_DARK}
                        />
                    </View>
                )}
                {details && (
                    <View style={baseStyles.detailsContainer}>
                        <Typography
                            text={details}
                            size="tiny"
                            color={COLORS.GREY}
                        />
                    </View>
                )}
            </View>
            {!disabledEdit && (
                <Icon
                    name="edit"
                    testID="icon"
                    iconStyles={baseStyles.icon}
                />
            )}
        </Pressable>
        <Divider />
        </>
    )
};
