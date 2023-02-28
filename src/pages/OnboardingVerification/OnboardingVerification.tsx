import React, { ReactElement } from "react";

import { IOnboardingVerificationTemplateProps, OnboardingVerificationTemplate } from "../../ui/templates";

export const OnboardingVerification = ({ navigation }: any): ReactElement => {
    const props: IOnboardingVerificationTemplateProps = {
        header: {
            text: "Verification",
            onPressBack: () => navigation.goBack(),
        },
        email: "j*****e@gmail.com",
        codeInput: {
            onEndCodeInput: () => navigation.navigate("OnboardingVerified"),
        },
        onPressResend: () => console.log("resend pressed"),
    };

    return <OnboardingVerificationTemplate {...props} />;
};
