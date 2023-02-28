import React, { ReactElement, useState } from "react";

import { ISignInTemplateProps, SignInTemplate } from "../../ui/templates";

export const SignIn = ({ navigation }: any): ReactElement => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const props: ISignInTemplateProps = {
        onPressBack: () => navigation.goBack(),
        email: {
            label: "Email",
            value: email,
            onChangeText: (value) => setEmail(value),
        },
        password: {
            label: "Password",
            value: password,
            onChangeText: (value) => setPassword(value),
        },
        onPressTrouble: () => console.log("trouble pressed"),
        onPressSignIn: () => console.log("sign in pressed"),
    };

    return <SignInTemplate {...props} />;
};
