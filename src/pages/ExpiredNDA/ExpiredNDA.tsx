import React, { ReactElement } from "react";
import { IExpiredNDATemplateProps, ExpiredNDATemplate } from "../../ui/templates";

export const ExpiredNDA = (): ReactElement => {
    const props: IExpiredNDATemplateProps = {
        onPressBack: () => console.log("back pressed"),
    };

    return <ExpiredNDATemplate {...props} />;
};
