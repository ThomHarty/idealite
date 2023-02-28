import { ViewStyle } from "react-native";

import { IFeedRewindAdCardProps, IMatchSuccessProps, ISwipeCardsProps } from "../../organisms";

export interface IFeedV2TemplateProps {
    showIntroCards?: boolean;
    onIntroFinished?: () => void;
    swipeCards: Omit<ISwipeCardsProps, "onChangeX" | "isLastCard">;
    lastCardReached: () => void;
    loading?: boolean;
    showRewindAdCard?: boolean;
    rewindAdCard?: IFeedRewindAdCardProps;
    onRewindAdCardSwiped?: () => void;
    showNoUsersCard?: boolean;
    matchSuccess?: IMatchSuccessProps;
};

export interface FeedV2TemplateStyles {
    container?: ViewStyle;
    swipeButtonsContainer?: ViewStyle;
};
