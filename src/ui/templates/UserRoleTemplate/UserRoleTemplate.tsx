import React, { ReactElement, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, View } from "react-native";

import { COLORS } from "../../../theme";
import { SwipeElectric, SwipeSpanner } from "../../../theme/svg";
import { Button, Image, Typography } from "../../atoms";
import { BorderedSvg, LogoHeader } from "../../molecules";
import { IUserRoleTemplateProps } from "./UserRoleTemplate.types";
import { useStyles } from "./useStyles";

export const UserRoleTemplate = ({
    onPressBack,
    onPressNext,
    avatar,
    onSelected,
}: IUserRoleTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    const [role, setRole] = useState<"idea" | "skillset" | undefined>(undefined);

    return (
        <View style={baseStyles.container}>
            <LogoHeader onPressBack={onPressBack}>
                <View />
                <View style={baseStyles.centerContainer}>
                    <View style={baseStyles.avatarContainer}>
                        <Image
                            size="avatarMedium"
                            src={avatar}
                        />
                    </View>
                    <View style={baseStyles.headingContainer}>
                        <Typography
                            text="I have..."
                            size="heading2"
                        />
                    </View>
                    <View style={baseStyles.selectContainer}>
                        <View style={baseStyles.itemContainer}>
                            <Pressable
                                style={baseStyles.itemContainer}
                                onPress={() => {
                                    setRole("idea");
                                    onSelected("idea");
                                    setDisabled(false);
                                }}
                            >
                                <BorderedSvg svg="electric" active={role === "idea"} />
                            </Pressable>
                            <View style={baseStyles.itemTextContainer}>
                                <Typography
                                    text="An idea"
                                    size="cta"
                                />
                            </View>
                        </View>
                        <View style={baseStyles.itemContainer}>
                            <Pressable
                                style={baseStyles.itemContainer}
                                onPress={() => {
                                    setRole("skillset");
                                    onSelected("skillset");
                                    setDisabled(false);
                                }}
                            >
                                <BorderedSvg svg="spanner" active={role === "skillset"} />
                            </Pressable>
                            <View style={baseStyles.itemTextContainer}>
                                <Typography
                                    text="A skillset"
                                    size="cta"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={baseStyles.textContainer}>
                        <Typography
                            text="To get started using Idealite, please let us know what you do, or what ideas you would like to show on your profile."
                            color={COLORS.GREY_DARK}
                            size="tiny"
                            lineHeight={21}
                        />
                    </View>
                </View>
                <View style={baseStyles.buttonContainer}>
                    <Button
                        text="Next"
                        onPress={onPressNext}
                        disabled={disabled}
                    />
                </View>
            </LogoHeader>
        </View>
    );
};
