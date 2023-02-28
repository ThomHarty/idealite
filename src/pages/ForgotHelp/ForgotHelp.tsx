import React, { ReactElement } from "react";

import { IForgotHelpTemplateProps, ForgotHelpTemplate } from "../../ui/templates";

export const ForgotHelp = (): ReactElement => {
    const props: IForgotHelpTemplateProps = {
        onPressBack: () => console.log("back pressed"),
        onPressNext: () => console.log("next pressed"),
    };

    return <ForgotHelpTemplate {...props} />;
};
