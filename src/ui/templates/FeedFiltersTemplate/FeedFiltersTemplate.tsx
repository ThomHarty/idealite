import React, { memo, ReactElement, useCallback, useState } from "react";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { COLORS } from "../../../theme";
import { Button, Chip, Slide, Typography } from "../../atoms";
import { FilterChoice, TextHeader } from "../../molecules";
import { IFeedFiltersTemplateProps } from "./FeedFiltersTemplate.types";
import { useStyles } from "./useStyles";

export const FeedFiltersTemplate = memo(({
    onPressBack,
    filterChoice,
    tags,
    onPressSeeMore,
    slide,
    location,
    onPressApply,
    onPressReset,
}: IFeedFiltersTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    
    const [slideValue, setSlideValue] = useState(slide.startValue);

    const _handleSlideChange = useCallback((value: number) => {
        setSlideValue(value);
        slide.handleOnChange(value);
    }, []);

    return (
        <View style={baseStyles.container}>
            <StatusBar barStyle="dark-content" />
            <TextHeader text="Filters" onPressBack={onPressBack}>
                <View style={baseStyles.wrapper}>
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 175, paddingTop: 36 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* filter by */}
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="Filter by"
                                size="small"
                            />
                        </View>
                        <View style={baseStyles.filterChoiceContainer}>
                            <FilterChoice {...filterChoice} />
                        </View>
                        {/* tags */}
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="Tags"
                                size="small"
                            />
                        </View>
                        <View style={baseStyles.tagsContainer}>
                            {tags.map((tag, i) => {
                                if(i < 10) {
                                    return (
                                        <View key={i} style={baseStyles.chipContainer}>
                                            <Chip text={tag} variant="secondary" />
                                        </View>
                                    );
                                };
                            })}
                            {tags.length > 10 && (
                                <View style={baseStyles.seeMoreContainer}>
                                    <Button
                                        text="See more"
                                        onPress={onPressSeeMore}
                                        variant="tertiary"
                                    />
                                </View>
                            )}
                        </View>
                        {/* location */}
                        <View style={baseStyles.headingContainer}>
                            <Typography
                                text="Location"
                                size="small"
                            />
                        </View>
                        <Slide {...slide} handleOnChange={_handleSlideChange} />
                        <View style={baseStyles.distanceTextContainer}>
                            <Typography text="Distance: " size="small" color={COLORS.GREY_DARK} />
                            <Typography text={`${slideValue}km `} size="small" />
                            <Typography text="away from: " size="small" color={COLORS.GREY_DARK} />
                        </View>
                        <Typography text={location} size="small" color={COLORS.GREY_DARK} />
                    </ScrollView>
                </View>
                {/* buttons */}
                <View style={baseStyles.buttonsContainer}>
                    <View style={baseStyles.firstButtonContainer}>
                        <Button
                            onPress={onPressApply}
                            text="Apply filters"
                        />
                    </View>
                    <Button
                        onPress={onPressReset}
                        text="Reset all filters"
                        variant="tertiary"
                    />
                </View>
            </TextHeader>
        </View>
    );
});
