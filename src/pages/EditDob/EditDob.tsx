import React, { ReactElement, useState } from "react";

import { IEditDobTemplateProps, EditDobTemplate } from "../../ui/templates";

export const EditDob = (): ReactElement => {
    const [day, setDay] = useState("22");
    const [month, setMonth] = useState("06");
    const [year, setYear] = useState("1992");
    const props: IEditDobTemplateProps = {
        onPressBack: () => () => console.log("back pressed"),
        onPressSave: () => () => console.log("save pressed"),
        onPressCancel: () => console.log("cancel pressed"),
        day: {
            label: "DD",
            value: day,
            onChangeText: (value) => setDay(value),
        },
        month: {
            label: "MM",
            value: month,
            onChangeText: (value) => setMonth(value),
        },
        year: {
            label: "YYYY",
            value: year,
            onChangeText: (value) => setYear(value),
        },
    };

    return <EditDobTemplate {...props} />;
};
