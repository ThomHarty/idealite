import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as P from '../pages';

const Stack = createStackNavigator();

export const AccountNavigation = (): ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={P.Account} />
      <Stack.Screen name="EditProfile" component={P.EditProfile} />
      <Stack.Screen name="EditAccount" component={P.EditAccountProfile} />
      <Stack.Screen name="EditName" component={P.EditName} />
      <Stack.Screen name="EditTagline" component={P.EditTagline} />
      <Stack.Screen name="EditLocation" component={P.EditLocation} />
      <Stack.Screen name="EditBio" component={P.EditBio} />
      <Stack.Screen name="EditIdea" component={P.EditIdea} />
      <Stack.Screen name="EditSkill" component={P.EditSkill} />
      <Stack.Screen name="EditExperience" component={P.EditExperience} />
      <Stack.Screen name="AddSkill" component={P.AddSkill} />
      <Stack.Screen name="AddExperience" component={P.AddExperience} />
      <Stack.Screen name="AccountSettings" component={P.AccountSettings} />
      <Stack.Screen name="Notifications" component={P.Notifications} />
      <Stack.Screen name="PremiumBilling" component={P.PremiumBilling} />
      <Stack.Screen name="NonPremiumBilling" component={P.NonPremiumBilling} />
    </Stack.Navigator>
  );
};
