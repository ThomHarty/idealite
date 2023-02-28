import React, { ReactElement, useState } from "react";
import { EditIdeaTemplate, IEditIdeaTemplateProps } from "../../ui/templates";

export const EditIdea = ({ navigation }: any): ReactElement => {
    const [name, setName] = useState("Career employment platform");
    const [idea, setIdea] = useState("Lorem ipsum");
    const props: IEditIdeaTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressUpdate: () => console.log("update pressed"),
        onPressCancel: () => navigation.goBack(),
        textArea: {
            value: idea,
            onChangeText: (value) => setIdea(value),
        },
        input: {
            value: name,
            onChangeText: (value) => setName(value),
        },
    };

    return <EditIdeaTemplate {...props} />;
};
