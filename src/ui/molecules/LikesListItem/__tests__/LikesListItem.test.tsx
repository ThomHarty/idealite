import { fireEvent, render } from "@testing-library/react-native";

import { LikesListItem } from "../LikesListItem";
import { ILikesListItemProps } from "../LikesListItem.types";

describe("LikesListItem Molecule", () => {
    const props: ILikesListItemProps = {
        name: "Amir",
        title: "Lorem ipsum",
        svg: "arrow",
        onPress: jest.fn(),
    };

    it("renders the name", () => {
        const { getByText } = render(<LikesListItem {...props} />);
        expect(getByText("Amir")).toBeTruthy();
    });

    it("renders the title", () => {
        const { getByText } = render(<LikesListItem {...props} />);
        expect(getByText("Lorem ipsum")).toBeTruthy();
    });

    it("renders the avatar", () => {
        const { getByTestId } = render(<LikesListItem {...props} />);
        expect(getByTestId("avatar")).toBeTruthy();
    });

    it("renders the svg", () => {
        const { getByTestId } = render(<LikesListItem {...props} />);
        expect(getByTestId("svg")).toBeTruthy();
    });

    it("handles the onPress callback", () => {
        const { getByTestId } = render(<LikesListItem {...props} />);
        fireEvent.press(getByTestId("press"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
