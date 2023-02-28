import React, { ReactElement } from "react";
import { Image } from "react-native";

import { IUserProfileTemplateProps, UserProfileTemplate } from "../../ui/templates";

// @ts-ignore
import DefaultImage from '../../theme/images/avatar-placeholder.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export const FeedUserProfile = ({ navigation }: any): ReactElement => {
    const props: IUserProfileTemplateProps = {
        onPressBack: () => navigation.goBack(),
        profileHeader: {
            name: "John Doe",
            title: "CEO of Company LTD.",
            location: "London, United Kingdom",
            joined: "March 2022",
            avatar: DEFAULT_IMAGE,
        },
        bio: `Lorem ipsum dolor sit amet, no has novum fabulas offendit, tota oratio exerci at vim. Postulant persequeris eam eu, case soluta definitiones mei no. Cum eu illum fierent, iisque definitiones usu id. In his dictas molestiae, cu mei malorum suavitate. Unum case timeam pri at. Quidam offendit salutatus ne mel, nibh clita adipiscing has ea, in blandit efficiendi assueverit his.

An agam elit commodo nam. Has an inciderint appellantur, inermis deleniti et mei. Sea iuvaret fabellas ei, ne sit dico aperiam. Sint perfecto vel cu, vix an similique conceptam, doctus voluptatibus eu eos.

Sea porro erant simul no, ius et euismod probatus, pri posse vocent an. Vel modo suscipit no, choro audiam pri no. Eros voluptua rationibus sea ei, ad adhuc explicari assentior has. Esse vivendo eam at, ne posse harum cum, at falli ludus habemus eam. Pri ut ullum docendi invidunt, ut nam nonumy fierent temporibus.
        `,
        showSwipeButtons: true,
        profileSwipeButtons: {
            onPressCross: () => navigation.goBack(),
            onPressStar: () => navigation.goBack(),
            onPressTick: () => navigation.goBack(),
        },
        idea: {
            title: "Career employment platform",
            body: "Lorem ipsum"
        },
        skills: [
            { id: "12j4", title: "Cyber security specialist" },
            { id: "9er9", title: "Software engineering" },
        ],
        experience: [
            {
                id: "h3ih",
                title: "Cyber security specialist",
                company: "Oracle",
                date: "Mar 2021 - Present",
            },
        ],
    };

    return <UserProfileTemplate {...props} />
};
