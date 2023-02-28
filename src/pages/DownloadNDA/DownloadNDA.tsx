import React, { ReactElement } from "react";
import { IDownloadNDATemplateProps, DownloadNDATemplate } from "../../ui/templates";

export const DownloadNDA = ({ navigation }: any): ReactElement => {
    const props: IDownloadNDATemplateProps = {
        onPressBack: () => navigation.goBack(),
        onPressDownload: () => console.log("download pressed"),
        ndaText: "Lorem ipsum",
    };

    return <DownloadNDATemplate {...props} />;
};
