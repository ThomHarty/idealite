import React, { ReactElement, useState } from "react";

import { ICreateBioTemplateProps, CreateBioTemplate } from "../../ui/templates";

export const CreateBio = ({ navigation }: any): ReactElement => {
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const props: ICreateBioTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressNext: () => navigation.navigate("UserRole"),
        onPressSkip: () => navigation.navigate("UserRole"),
        location: {
            label: "Location",
            value: location,
            onChangeText: (value) => setLocation(value),
        },
        bio: {
            value: bio,
            onChangeText: (value) => setBio(value),
        },
        avatar: "https://placeimg.com/640/480/people",
    };

    return <CreateBioTemplate {...props} />;
};
