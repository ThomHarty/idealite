import { useState } from "react";
import { Image } from "react-native";

import { ISwipeCardsProps } from "../../ui/organisms";
import { FeedV2Template, IFeedV2TemplateProps } from "../../ui/templates";

// @ts-ignore
import DefaultImage from '../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export const FeedV2 = ({ navigation }: any) => {
    const [swipedRightIds, setSwipedRightIds] = useState<number[]>([]);
    const [swipedLeftIds, setSwipedLeftIds] = useState<number[]>([]);
    const [showIntroCards, setShowIntroCards] = useState(false);
    const [showRewindAdCard, setShowRewindAdCard] = useState(false);
    const [loading, setLoading] = useState(false);

    const userCards: ISwipeCardsProps["cards"] = [1,2,3,4,5,6,7].map((_, i) => {
      return {
        id: i + 10,
        cardType: "user",
        userCardProps: {
          swipeUserInfo: {
            avatar: DEFAULT_IMAGE,
            title: "Sustainable Fashion Brand",
            name: `User ${i}`,
            distance: "22 miles away",
          },
          blurb: "Lorem ipsum dolor sit amet. Qui sunt illo qui labore illo id quos recusandae est possimus possimus nam enim quidem ut voluptatibus explicabo! Sit sunt iste in nihil quidem est facere nisi. Et vitae rerum eum ducimus beatae aut quas repellendus. Lorem ipsum dolor sit amet. Qui sunt illo qui labore illo id quos...",
          tags: [
              "Cyber security",
              "Fashion",
              "Sustainability",
          ],
        }
      }
    });
    const dummyCards: ISwipeCardsProps["cards"] = [1,2,3,4].map((_,i) => {
      return {
        id: i + 100,
        cardType: "dummy",
        showSwipeIcons: false,
        // todo hide grey icons also with props
      }
    });

    const cards = [...userCards, ...dummyCards];

    const onPress: ISwipeCardsProps["onPress"] = (id) => navigation.navigate("FeedUserProfile");
    const onSwipedRight: ISwipeCardsProps["onSwipedRight"] = (id) => setSwipedRightIds(current => [...current, id]);
    const onSwipedLeft: ISwipeCardsProps["onSwipedLeft"] = (id) => setSwipedLeftIds(current => [...current, id]);
    const topRightIconOnPress: ISwipeCardsProps["topRightIconOnPress"] = () => navigation.navigate("FeedFilters");
    const topLeftIconOnPress: ISwipeCardsProps["topLeftIconOnPress"] = (id) => console.log("left icon pressed: ", id);

    const onIntroFinished = () => {
      setShowIntroCards(false);
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    const lastCardReached = () => {
      setLoading(true);
    };

    const rewindAdCard: IFeedV2TemplateProps["rewindAdCard"] = {
      onPressJoin: () => setShowRewindAdCard(false),
      onPressNo: () => setShowRewindAdCard(false),
    };

    const onRewindAdCardSwiped = () => {
      setShowRewindAdCard(false);
    };

    const matchSuccess: IFeedV2TemplateProps["matchSuccess"] = {
      onPressKeepSwiping: () => console.log("keep swiping"),
      onPressSendMessage: () => console.log("send message"),
      authAvatar: DEFAULT_IMAGE,
      otherUser: {
        name: "John",
        avatar: DEFAULT_IMAGE,
      },
      visible: false,
    };

    const props: IFeedV2TemplateProps = {
        swipeCards: {
            cards,
            onPress,
            onSwipedRight,
            onSwipedLeft,
            topRightIconOnPress,
            topLeftIconOnPress,
            cardsDisabled: showIntroCards || loading || showRewindAdCard,
        },
        showIntroCards,
        onIntroFinished,
        loading,
        lastCardReached,
        showRewindAdCard,
        rewindAdCard,
        onRewindAdCardSwiped,
        matchSuccess,
    };

    return <FeedV2Template {...props} />;
};
