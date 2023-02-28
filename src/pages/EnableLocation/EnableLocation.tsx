import React, { ReactElement } from "react";

import { IEnableLocationTemplateProps, EnableLocationTemplate } from "../../ui/templates";

export const EnableLocation = ({ navigation }: any): ReactElement => {
    const props: IEnableLocationTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressWhy: () => console.log("why pressed"),
        onPressAllow: () => navigation.navigate("UploadPhoto"),
    };

    return <EnableLocationTemplate {...props} />;
};
