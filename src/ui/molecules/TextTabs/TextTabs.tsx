import React, { memo, ReactElement, useCallback, useRef, useState } from "react";
import { Pressable, ScrollView, useWindowDimensions, View } from "react-native";

import { ActiveBar, Typography } from "../../atoms";
import { useStyles } from "./useStyles";
import { ITextTabsProps, TabHeader, TabNumbers } from "./TextTabs.types";
import { colors } from "./constants";
import { useTheme } from "../../../theme";

export const TextTabs = memo(({
    initial,
    tabOneContent,
    tabTwoContent,
    tabThreeContent,
    tabFourContent,
}: ITextTabsProps): ReactElement => {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    const scrollRef = useRef<ScrollView | null>(null);
    const [active, setActive] = useState(initial || 1);
    const baseStyles = useStyles();

    const handleChangeTab = useCallback((tab: TabNumbers) => {
        setActive(tab);
        let x;
        switch(tab) {
            case 1:
                x = 0;
                break;
            case 2:
                x = width;
                break;
            case 3:
                x = width * 2;
                break;
            case 4:
                x = width * 3;
                break;
        }
        scrollRef?.current?.scrollTo({ x });
    }, []);

    const tabHeaders: TabHeader[] = [
        {tab: 1, name: "Bio"},
        {tab: 2, name: "Idea"},
        {tab: 3, name: "Skills"},
        {tab: 4, name: "Experience"},
    ];
    
    return (
        <>
        <View style={baseStyles.container}>
            <>
            {tabHeaders.map((header) => {
                return (
                    <Pressable
                        key={header.tab}
                        onPress={() => handleChangeTab(header.tab)}
                        style={baseStyles.tabContainer}
                    >
                        <View style={baseStyles.textContainer}>
                            <Typography
                                text={header.name}
                                size="small"
                                animate={{
                                    check: active === header.tab,
                                    zero: colors.color[theme],
                                    one: colors.activeColor[theme],
                                }}
                            />
                        </View>
                        <ActiveBar active={active === header.tab} />
                    </Pressable>
                )
            })}
            </>
        </View>
        <ScrollView horizontal scrollEnabled={false} ref={scrollRef}>
            <View style={baseStyles.contentContainer}>
                <View style={baseStyles.contentTabContainer}>
                    {tabOneContent}
                </View>
                <View style={baseStyles.contentTabContainer}>
                    {tabTwoContent}
                </View>
                <View style={baseStyles.contentTabContainer}>
                    {tabThreeContent}
                </View>
                <View style={baseStyles.contentTabContainer}>
                    {tabFourContent}
                </View>
            </View>
        </ScrollView>
        </>
    )
});
