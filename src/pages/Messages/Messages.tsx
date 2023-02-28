import { ReactElement } from "react";
import { IMessagesTemplateProps, MessagesTemplate } from "../../ui/templates";

export const Messages = ({ navigation }: any): ReactElement => {
    const props: IMessagesTemplateProps = {
        conversations: [
            {
                id: 1,
                name: "John Doe",
                title: "Marketing Executive",
                message: "Hi there! Nice to meet you, I was thinking that we could discuss this further once you have signed the NDA.",
                avatarStatus: {
                    online: true,
                    avatar: "https://placeimg.com/640/480/people",
                },
                unread: true,
            },
            {
                id: 2,
                name: "Jenny Doe",
                title: "Collaboration platform",
                message: "This sounds great!",
                avatarStatus: {
                    online: false,
                    avatar: "https://placeimg.com/640/480/people",
                },
                unread: false,
                superlike: true,
            },
        ],
        // conversations: [],
        onPressConversation: (id) => navigation.navigate("Chat"),
        // isPremium: true,
    };

    return <MessagesTemplate {...props} />
};
