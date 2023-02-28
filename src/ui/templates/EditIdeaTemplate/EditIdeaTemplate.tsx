import React, { ReactElement } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Input, TextArea } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IEditIdeaTemplateProps } from "./EditIdeaTemplate.types";
import { useStyles } from "./useStyles";

export const EditIdeaTemplate = ({
    onPressBack,
    onPressUpdate,
    onPressCancel,
    input,
    textArea,
}: IEditIdeaTemplateProps): ReactElement => {
    const baseStyles = useStyles();

    return (
        <Pressable style={baseStyles.container} onPress={Keyboard.dismiss}>
            <TextHeader text="Edit Idea" onPressBack={onPressBack}>
                <View style={baseStyles.inputContainer}>
                    <Input {...input} label="Idea name" />
                </View>
                <View style={baseStyles.textAreaContainer}>
                    <TextArea {...textArea} limit={500} />
                </View>
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button text="Update" onPress={onPressUpdate} />
                </View>
                <Button
                    text="Cancel"
                    onPress={onPressCancel}
                    variant="secondary"
                />
            </View>
        </Pressable>
    );
};
