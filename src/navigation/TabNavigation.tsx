import React, { ReactElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FeedV2 } from "../pages/FeedV2/FeedV2";
import { Icon, IIconProps } from "../shared/components";
import { COLORS } from "../theme";

import { FeedNavigation } from "./FeedNavigation";
import { InterestsNavigation } from "./InterestsNavigation";
import { MessagesNavigation } from "./MessagesNavigtion";
import { AccountNavigation } from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export const TabNavigation = (): ReactElement => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon: IIconProps["name"] = "cards";

                    const iconStyles: TextStyle = {
                        fontSize: 24,
                        color: focused ? COLORS.WHITE : COLORS.ACCENT_ONE,
                    };

                    switch(route.name) {
                        case "Feed":
                            icon = "cards";
                            break;
                        case "Likes":
                            icon = "cloud";
                            break;
                        case "Messages":
                            icon = "speech";
                            break;
                        case "Account":
                            icon = "person";
                            break;
                    };

                    return <Icon name={icon} iconStyles={iconStyles} />;
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: barStyles,
            })}
        >
            <Tab.Screen name="Feed" component={FeedNavigation} />
            <Tab.Screen name="Likes" component={InterestsNavigation} />
            <Tab.Screen name="Messages" component={MessagesNavigation} />
            <Tab.Screen name="Account" component={AccountNavigation} />
        </Tab.Navigator>
    );
};

const barStyles: ViewStyle = {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
};
