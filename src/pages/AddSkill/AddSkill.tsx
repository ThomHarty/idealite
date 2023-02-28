import React, { ReactElement, useState } from "react";

import { ICreateSkillTemplateProps, CreateSkillTemplate } from "../../ui/templates";

export const AddSkill = ({ navigation }: any): ReactElement => {
    const [skill, setSkill] = useState("");
    const props: ICreateSkillTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressAdd: () => console.log("add pressed"),
        onPressCancel: () => navigation.goBack(),
        skill: {
            label: "Skill",
            value: skill,
            onChangeText: (value) => setSkill(value),
        },
    };

    return <CreateSkillTemplate {...props} />;
};
