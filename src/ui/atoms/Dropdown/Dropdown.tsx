import React, { memo, ReactElement, useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";

import { DropdownItem, IDropdownProps } from "./Dropdown.types";
import { baseStyles } from "./Dropdown.styles";
import { useDisabledColors, useLayoutStyles, useSelectedColors } from "./animations";
import { Icon } from "../../../shared/components";

export const Dropdown = memo(({
    label,
    selected,
    items,
    disabled = false,
    onItemSelected,
    selectText,
}: IDropdownProps): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(selected);
    const { layout } = useLayoutStyles({isOpen, hasSelected: selected ? true : false});
    const { disabledColors } = useDisabledColors({disabled});
    const { selectedColors } = useSelectedColors({hasSelected: selected ? true : false})

    const filterItems = useCallback(() => {
        return items.filter((item) => item.key !== selected?.key);
    }, [selected]);

    const handleDropdown = useCallback(() => {
        if(showDropdown) {
            setIsOpen(false);
            setTimeout(() => {
                setShowDropdown(false);
            }, 275);
        } else {
            setIsOpen(true);
            setShowDropdown(true);
        }
    }, [showDropdown]);

    const itemOnPress = (item: DropdownItem) => {
        setSelectedItem(item);
        onItemSelected(item);
    };

    return (
        <>
        {/* label */}
        {label && (
            <Animated.Text style={[baseStyles.label, layout.label]}>
                {label}
            </Animated.Text>
        )}
        {/* selected */}
        <Pressable onPress={handleDropdown} testID="open-dropdown">
            <Animated.View style={[
                baseStyles.selectedContainer,
                disabledColors.input,
            ]}>
                <Text style={baseStyles.selectedText}>
                    {selectedItem?.key}
                </Text>
            </Animated.View>
            <Animated.View style={[baseStyles.iconContainer, layout.icon]}>
                <Icon name="down-chevron" iconStyles={baseStyles.icon} />
            </Animated.View>
        </Pressable>
        {/* dropdown */}
        {showDropdown && (
        <View style={baseStyles.dropdownContainer}>
            <Animated.View style={[
                baseStyles.dropdownWrapper,
                layout.dropdown,
            ]}>
                {/* selected value */}
                <Animated.View style={[
                    baseStyles.selectedValueContainer,
                    selectedColors.selected,
                ]}>
                    <Animated.Text style={baseStyles.selectedValueText}>
                        {selectedItem?.value || selectText || "Select"}
                    </Animated.Text>
                </Animated.View>
                <View style={baseStyles.flatlistContainer}>
                    <FlatList
                        data={filterItems()}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => itemOnPress(item)}>
                                <View style={baseStyles.itemContainer}>
                                    <Text style={baseStyles.itemText}>
                                        {item.value}
                                    </Text>
                                </View>
                            </Pressable>
                        )}
                        keyExtractor={item => item.key}
                    />
                </View>
            </Animated.View>
        </View>
        )}
        </>
    )
});
