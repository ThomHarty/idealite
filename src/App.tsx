import React, {ReactElement} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {COLORS, ThemeProvider} from './theme';
import {OnboardingNavigation} from './navigation/OnboardingNavigation';
import {TabNavigation} from './navigation/TabNavigation';

export const App = (): ReactElement => {
  const authed = false;

  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: COLORS.GREY_LIGHT}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ThemeProvider>
            {authed ? <TabNavigation /> : <OnboardingNavigation />}
          </ThemeProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
