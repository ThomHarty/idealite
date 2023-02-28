import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Input } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IEditLocationTemplateProps } from "./EditLocationTemplate.types";
import { useStyles } from "./useStyles";

export const EditLocationTemplate = ({
    onPressBack,
    onPressUpdate,
    onPressCancel,
    location,
}: IEditLocationTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if(location.value.length > 3) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [location.value]);
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Edit Location">
                <View style={baseStyles.inputContainer}>
                    <Input {...location} />
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
