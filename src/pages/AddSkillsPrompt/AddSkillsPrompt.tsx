import React, { ReactElement } from "react";

import { IAddSkillsPromptTemplateProps, AddSkillsPromptTemplate } from "../../ui/templates";

export const AddSkillsPrompt = ({ navigation }: any): ReactElement => {
    const props: IAddSkillsPromptTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressYes: () => navigation.navigate("AddSkills"),
        onPressNo: () => navigation.navigate("ProfileSuccess"),
        avatar: "https://placeimg.com/640/480/people",
    };

    return <AddSkillsPromptTemplate {...props} />;
};
