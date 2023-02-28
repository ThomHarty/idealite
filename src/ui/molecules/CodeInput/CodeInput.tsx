import React, { memo, ReactElement, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";

import { ICodeInputProps, Code, GetInputProps, TextInputProps } from "./CodeInput.types";
import { baseStyles } from "./CodeInput.styles";
import { useInvalidColors, useLayoutStyles, useSuccessColors } from "./animations";
import * as hooks from "./hooks";

export const CodeInput = memo(({
    error,
    correct = false,
    onEndCodeInput,
}: ICodeInputProps): ReactElement => {
    const hasError = error ? true : false;
    // local state
    const [code, setCode] = useState<Code>({ 0: "", 1: "", 2: "", 3: "", 4: "", 5: "" });
    const [currentError, setCurrentError] = useState("");
    // animations
    const { layout } = useLayoutStyles({hasError: code[5] !== "" && hasError});
    const { successColors } = useSuccessColors({success: code[5] !== "" && correct});
    const { invalidColors } = useInvalidColors({invalid: code[5] !== "" && hasError});
    // hooks
    const refs = hooks.useInputRefs();
    const focusForwards = hooks.useFocusForwards();
    const focusBackwards = hooks.useFocusBackwards();
    const checkIsEditable = hooks.useCheckIsEditable();
    const getInputProps = hooks.useGetInputProps();

    useEffect(() => {
        focusForwards({ refs, code, onEndCodeInput });
    }, [refs, code, onEndCodeInput]);

    const handleBack = (input: GetInputProps["input"]) => {
        focusBackwards({ input, refs });
        onEndCodeInput("");
    };

    const isEditable = (input: GetInputProps["input"]) => {
        const editable = checkIsEditable({ input, code });
        return editable;
    };

    const handleGetInputProps = ({ ref, codeIndex, input }: GetInputProps): TextInputProps => {
        const props = getInputProps({ ref, codeIndex, input, code, setCode, isEditable, handleBack });
        return props;
    };

    useEffect(() => {
        error ? setCurrentError(error) : setTimeout(() => setCurrentError(""), 275);
    }, [error]);

    const inputs: GetInputProps[] = [
        { ref: refs.inputRef1, codeIndex: 0, input: 1 },
        { ref: refs.inputRef2, codeIndex: 1, input: 2 },
        { ref: refs.inputRef3, codeIndex: 2, input: 3 },
        { ref: refs.inputRef4, codeIndex: 3, input: 4 },
        { ref: refs.inputRef5, codeIndex: 4, input: 5 },
        { ref: refs.inputRef6, codeIndex: 5, input: 6 },
    ]

    return (
        <>
        <View style={baseStyles.container}>
            {inputs.map((input, key) => {
                return (
                    <Animated.View key={key} style={[
                        baseStyles.inputWrapper,
                        !error && successColors.input,
                        invalidColors.input,
                    ]}>
                        <TextInput
                            style={baseStyles.input}
                            {...handleGetInputProps({...input})}
                        />
                    </Animated.View>
                )
            })}
        </View>
        {currentError && (
            <Animated.View style={[baseStyles.errorContainer, layout.error]}>
                <Text style={baseStyles.errorText}>{currentError}</Text>
            </Animated.View>
        )}
        </>
    )
});
