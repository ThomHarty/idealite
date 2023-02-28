import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as P from '../pages';

const Stack = createStackNavigator();

export const InterestsNavigation = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Interests" component={P.Interests} />
      <Stack.Screen name="UserProfile" component={P.UserProfile} />
    </Stack.Navigator>
  );
};
