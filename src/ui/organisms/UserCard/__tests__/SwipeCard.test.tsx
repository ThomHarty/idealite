import { fireEvent, render } from "@testing-library/react-native";

import { SwipeCard } from "../UserCard";
import { ISwipeCardProps } from "../UserCard.types";

describe("SwipeCard Organism", () => {
    const props: ISwipeCardProps = {
        order: 1,
        onPress: jest.fn(),
        onSwipedLeft: () => {},
        onSwipedRight: () => {},
        swipeIcons: {
            leftOnPress: () => {},
            rightOnPress: () => {},
        },
        swipeUserInfo: {
            avatar: "",
            title: "",
            name: "",
            distance: "",
        },
        blurb: "blurb",
        tags: ["tag"],
    };

    it("renders the blurb and tags", () => {
        const { getByText } = render(<SwipeCard {...props} />);
        expect(getByText("blurb")).toBeTruthy();
        expect(getByText("tag")).toBeTruthy();
    });

    it("handles the onPress callback", () => {
        const { getByText } = render(<SwipeCard {...props} />);
        fireEvent.press(getByText("blurb"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
