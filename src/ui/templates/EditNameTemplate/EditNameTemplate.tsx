import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Input } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IEditNameTemplateProps } from "./EditNameTemplate.types";
import { useStyles } from "./useStyles";

export const EditNameTemplate = ({
    onPressBack,
    onPressUpdate,
    onPressCancel,
    name,
}: IEditNameTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if(name.value.length > 3) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [name.value]);
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Edit Name">
                <View style={baseStyles.inputContainer}>
                    <Input {...name} />
                </View>
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button
                        text="Save Changes"
                        onPress={onPressUpdate}
                        disabled={disabled}
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
