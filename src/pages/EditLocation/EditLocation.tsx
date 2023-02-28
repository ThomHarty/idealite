import React, { ReactElement, useState } from "react";

import { IEditLocationTemplateProps, EditLocationTemplate } from "../../ui/templates";

export const EditLocation = ({ navigation }: any): ReactElement => {
    const [location, setLocation] = useState("London, United Kingdom");
    const props: IEditLocationTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressUpdate: () => console.log("update pressed"),
        onPressCancel: () => navigation.goBack(),
        location: {
            label: "Location",
            value: location,
            onChangeText: (value) => setLocation(value),
        },
    };

    return <EditLocationTemplate {...props} />;
};
