import React, { ReactElement, useState } from "react";

import { IChangePasswordTemplateProps, ChangePasswordTemplate } from "../../ui/templates";

export const ChangePassword = (): ReactElement => {
    const [old, setOld] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const props: IChangePasswordTemplateProps = {
        onPressBack: () => () => console.log("back pressed"),
        onPressUpdate: () => () => console.log("update pressed"),
        onPressCancel: () => console.log("cancel pressed"),
        oldPassword: {
            label: "Old Password",
            value: old,
            onChangeText: (value) => setOld(value),
        },
        newPassword: {
            label: "New Password",
            value: password,
            onChangeText: (value) => setPassword(value),
        },
        confirmNew: {
            label: "Confirm Password",
            value: confirm,
            onChangeText: (value) => setConfirm(value),
        },
    };

    return <ChangePasswordTemplate {...props} />;
};
