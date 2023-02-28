import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import * as P from "../pages";

const Stack = createStackNavigator();

export const OnboardingNavigation = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardingSlides" component={P.OnboardingSlides} />
            <Stack.Screen name="Landing" component={P.Landing} />
            <Stack.Screen name="SignIn" component={P.SignIn} />
            <Stack.Screen name="OnboardingName" component={P.OnboardingName} />
            <Stack.Screen name="OnboardingEmail" component={P.OnboardingEmail} />
            <Stack.Screen name="OnboardingDob" component={P.OnboardingDob} />
            <Stack.Screen name="OnboardingTelephone" component={P.OnboardingTelephone} />
            <Stack.Screen name="OnboardingPassword" component={P.OnboardingPassword} />
            <Stack.Screen name="OnboardingVerification" component={P.OnboardingVerification} />
            <Stack.Screen name="OnboardingVerified" component={P.OnboardingVerified} />
            <Stack.Screen name="EnableLocation" component={P.EnableLocation} />
            <Stack.Screen name="UploadPhoto" component={P.UploadPhoto} />
            <Stack.Screen name="CreateBio" component={P.CreateBio} />
            <Stack.Screen name="UserRole" component={P.UserRole} />
            <Stack.Screen name="AddSkillsPrompt" component={P.AddSkillsPrompt} />
            <Stack.Screen name="CreateIdea" component={P.CreateIdea} />
            <Stack.Screen name="AddSkills" component={P.AddSkills} />
            <Stack.Screen name="ProfileSuccess" component={P.ProfileSuccess} />
            <Stack.Screen name="CreateSkill" component={P.CreateSkill} />
        </Stack.Navigator>
    );
};
