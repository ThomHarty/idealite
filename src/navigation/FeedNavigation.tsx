import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as P from "../pages";

const Stack = createStackNavigator();

export const FeedNavigation = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Feed" component={P.FeedV2} />
            <Stack.Screen name="FeedFilters" component={P.FeedFilters} />
            <Stack.Screen name="FeedUserProfile" component={P.FeedUserProfile} />
        </Stack.Navigator>
    );
};
