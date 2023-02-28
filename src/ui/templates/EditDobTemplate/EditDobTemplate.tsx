import React, { ReactElement, useEffect, useState } from "react";
import { Keyboard, Pressable, View } from "react-native";

import { Button, Input } from "../../atoms";
import { TextHeader } from "../../molecules";
import { IEditDobTemplateProps } from "./EditDobTemplate.types";
import { useStyles } from "./useStyles";

export const EditDobTemplate = ({
    onPressBack,
    onPressSave,
    onPressCancel,
    day,
    month,
    year,
}: IEditDobTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if(
            (day.value.length === 2) &&
            (month.value.length === 2) &&
            (year.value.length === 4)
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [day, month, year]);
    return (
        <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
            <TextHeader onPressBack={onPressBack} text="Edit Date of Birth">
                <View style={baseStyles.inputContainer}>
                    <View style={baseStyles.ddContainer}>
                        <Input
                            {...day}
                            nativeProps={{
                                keyboardType: "number-pad",
                                maxLength: 2,
                            }}
                        />
                    </View>
                    <View style={baseStyles.mmContainer}>
                        <Input
                            {...month}
                            nativeProps={{
                                keyboardType: "number-pad",
                                maxLength: 2,
                            }}
                        />
                    </View>
                    <View style={baseStyles.yyyyContainer}>
                        <Input
                            {...year}
                            nativeProps={{
                                keyboardType: "number-pad",
                                maxLength: 4,
                            }}
                        />
                    </View>
                </View>
            </TextHeader>
            <View style={baseStyles.buttonsContainer}>
                <View style={baseStyles.topButtonContainer}>
                    <Button
                        text="Save Changes"
                        onPress={onPressSave}
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
