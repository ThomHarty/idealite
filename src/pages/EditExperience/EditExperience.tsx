import React, { ReactElement, useState } from "react";
import { DropdownItem } from "../../ui/atoms";

import { IEditExperienceTemplateProps, EditExperienceTemplate } from "../../ui/templates";

export const EditExperience = ({ navigation }: any): ReactElement => {
    const [title, setTitle] = useState("");
    const [institution, setInstitution] = useState("");
    const [current, setCurrent] = useState(false);
    const [start, setStart] = useState<DropdownItem | undefined>(undefined);
    const [end, setEnd] = useState<DropdownItem | undefined>(undefined);
    const props: IEditExperienceTemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressUpdate: () => console.log("update pressed"),
        onPressCancel: () => navigation.goBack(),
        title: {
            label: "Title",
            value: title,
            onChangeText: (value) => setTitle(value),
        },
        institution: {
            label: "Institution",
            value: institution,
            onChangeText: (value) => setInstitution(value),
        },
        current: {
            checked: current,
            onPress: () => setCurrent(c => !c),
        },
        start: {
            items: [{key: "Jan 2022", value: "January 2022"},{key: "Feb 2022", value: "February 2022"}],
            onItemSelected: (item) => setStart(item),
            selected: start,
        },
        end: {
            items: [{key: "Oct 2022", value: "October 2022"},{key: "Nov 2022", value: "November 2022"}],
            onItemSelected: (item) => setEnd(item),
            selected: end,
        },
    };

    return <EditExperienceTemplate {...props} />;
};
