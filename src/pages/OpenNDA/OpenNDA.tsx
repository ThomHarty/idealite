import React, { ReactElement } from "react";
import { IOpenNDATemplateProps, OpenNDATemplate } from "../../ui/templates";

export const OpenNDA = (): ReactElement => {
    const props: IOpenNDATemplateProps = {
        onPressBack: () => console.log("back pressed"),
        onPressAccept: () => console.log("accept pressed"),
        onPressDecline: () => console.log("decline pressed"),
        ndaText: "Lorem ipsum",
    };

    return <OpenNDATemplate {...props} />;
};
