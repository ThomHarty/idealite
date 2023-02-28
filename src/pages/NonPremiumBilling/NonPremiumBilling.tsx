import React, { ReactElement } from "react";

import { INonPremiumBillingTemplateProps, NonPremiumBillingTemplate } from "../../ui/templates";

export const NonPremiumBilling = ({ navigation }: any): ReactElement => {
    const props: INonPremiumBillingTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressSignUp: () => console.log("update pressed"),
    };

    return <NonPremiumBillingTemplate {...props} />;
};
