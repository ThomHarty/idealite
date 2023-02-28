import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as P from '../pages';

const Stack = createStackNavigator();

export const MessagesNavigation = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Messages" component={P.Messages} />
      <Stack.Screen name="Chat" component={P.Chat} />
      {/* @TODO: handle different NDA types with NDASwitch component - (ndaType: "" | "" ...) => {}; */}
      <Stack.Screen name="DownloadNDA" component={P.DownloadNDA} />
    </Stack.Navigator>
  );
};
