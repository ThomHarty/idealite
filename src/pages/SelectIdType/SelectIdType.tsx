import React, { ReactElement, useState } from "react";

import { ISelectIdTypeTemplateProps, SelectIdTypeTemplate } from "../../ui/templates";

export const SelectIdType = (): ReactElement => {
    const [selected, setSelected] = useState<"passport" | "license" | undefined>(undefined);
    const props: ISelectIdTypeTemplateProps = {
        onPressBack: () => console.log("back pressed"),
        onPressContinue: () => console.log("continue pressed"),
        selected,
        onPressType: (value) => setSelected(value),
    };

    return <SelectIdTypeTemplate {...props} />;
};
