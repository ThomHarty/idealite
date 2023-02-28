import React, { ReactElement } from "react";
import { ILikesListItemProps } from "../../ui/molecules";
import { IInterestsTemplateProps, InterestsTemplate } from "../../ui/templates";

export const Interests = ({ navigation }: any): ReactElement => {
    const items: Omit<ILikesListItemProps, "onPress">[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((_, i) => {
        return {
            id: i + 10,
            name: `User ${i}`,
            title: "Social media platfrom aimed at entrepreneurs and high skilled workers",
            svg: "globe",
        };
    });

    const props: IInterestsTemplateProps = {
        likes: items,
        onPressLikes: (id) => navigation.navigate("UserProfile"),
        likesSent: items,
        onPressLikesSent: (id) => navigation.navigate("UserProfile"),
        recommended: items,
        onPressRecommended: (id) => navigation.navigate("UserProfile"),
        hasLikesUnread: false,
        onPressJoinNow: () => console.log("join now pressed"),
        isPremium: true,
    };

    return <InterestsTemplate {...props} />;
};
