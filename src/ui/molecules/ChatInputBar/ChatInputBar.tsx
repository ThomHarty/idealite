import React, { memo, ReactElement, useState } from "react";
import { TextInput, View } from "react-native";

import { IChatInputBarProps } from "./ChatInputBar.types";
import { FlatIconButton } from "../../atoms";
import { COLORS } from "../../../theme";
import { useStyles } from "./useStyles";

export const ChatInputBar = memo(({
    value,
    onChangeText,
    onPressPaperclip,
    onPressDocument,
    onPressSend,
    placeholder,
}: IChatInputBarProps): ReactElement => {
    const baseStyles = useStyles();
    const [height, setHeight] = useState(38);
    return (
        <View style={baseStyles.container}>
            <View style={baseStyles.iconContainer}>
                <FlatIconButton
                    onPress={onPressPaperclip}
                    icon="paperclip"
                    backgroundColor={COLORS.ACCENT_TWO}
                    testID="paperclip"
                />
            </View>
            <View style={baseStyles.iconContainer}>
                <FlatIconButton
                    onPress={onPressDocument}
                    icon="document"
                    backgroundColor={COLORS.ACCENT_TWO}
                    testID="document"
                />
            </View>
            <TextInput
                style={[baseStyles.input, { height }]}
                multiline
                onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height + 20)}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.GREY_DARK}
                placeholder={placeholder}
            />
            <View style={baseStyles.chatIconContainer}>
                <FlatIconButton
                    onPress={onPressSend}
                    icon="sent"
                    backgroundColor={COLORS.PRIMARY}
                    iconColor={COLORS.WHITE}
                    testID="sent"
                />
            </View>
        </View>
    );
});
