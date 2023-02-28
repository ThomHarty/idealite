import React, { ReactElement, useState } from "react";

import { IRecoverEmailTemplateProps, RecoverEmailTemplate } from "../../ui/templates";

export const RecoverEmail = (): ReactElement => {
    const [email, setEmail] = useState("");
    const props: IRecoverEmailTemplateProps = {
        onPressBack: () => console.log("back pressed"),
        onPressNext: () => console.log("next pressed"),
        onPressForgot: () => console.log("forgot pressed"),
        email: {
            label: "Email",
            value: email,
            onChangeText: (value) => setEmail(value),
        }
    };

    return <RecoverEmailTemplate {...props} />;
};
