import { ViewStyle } from "react-native";
import { ISlideProps } from "../../atoms";

import { IFilterChoiceProps } from "../../molecules";

export interface IFeedFiltersTemplateProps {
    onPressBack: () => void;
    filterChoice: IFilterChoiceProps;
    tags: string[];
    onPressSeeMore: () => void;
    slide: ISlideProps;
    location: string;
    onPressApply: () => void;
    onPressReset: () => void;
};

export interface FeedFiltersTemplateStyles {
    container?: ViewStyle;
    wrapper?: ViewStyle;
    headingContainer?: ViewStyle;
    filterChoiceContainer?: ViewStyle;
    tagsContainer?: ViewStyle;
    chipContainer?: ViewStyle;
    seeMoreContainer?: ViewStyle;
    distanceTextContainer?: ViewStyle;
    buttonsContainer?: ViewStyle;
    firstButtonContainer?: ViewStyle;
};
