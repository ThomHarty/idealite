import React, { ReactElement } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Checkbox, Dropdown, Input, Typography } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IEditExperienceTemplateProps } from "./EditExperienceTemplate.types";
import { useStyles } from "./useStyles";

export const EditExperienceTemplate = ({
    onPressBack,
    onPressUpdate,
    onPressCancel,
    title,
    institution,
    current,
    start,
    end,
}: IEditExperienceTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Edit Experience">
                <View style={baseStyles.inputContainer}>
                    <Input {...title} />
                </View>
                <View style={baseStyles.secondInputContainer}>
                    <Input {...institution} />
                </View>
                <View style={baseStyles.checkboxContainer}>
                    <Checkbox {...current} />
                    <View style={baseStyles.checkboxTextContainer}>
                        <Typography text="I currently work in this role" size="text" />
                    </View>
                </View>
                <View style={baseStyles.dropdownsContainer}>
                    <View style={baseStyles.dropdownWrapper}>
                        <Dropdown {...start} label="Start date" />
                    </View>
                    <View style={baseStyles.dropdownWrapper}>
                        <Dropdown {...end} label="End date" />
                    </View>
                </View>
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button
                        text="Update"
                        onPress={onPressUpdate}
                    />
                </View>
                <Button
                    text="Cancel"
                    onPress={onPressCancel}
                    variant="secondary"
                />
            </View>
        </Pressable>
    )
};
