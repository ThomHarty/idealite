import { fireEvent, render } from "@testing-library/react-native";

import { AccountHeader } from "../AccountHeader";
import { IAccountHeaderProps } from "../AccountHeader.types";

describe("AccountHeader Molecule", () => {
    const props: IAccountHeaderProps = {
        avatarStatus: {},
        name: "Name",
        title: "Title",
        location: "Location",
        joined: "March 2022",
        onPressEdit: jest.fn(),
        onPressSeeMore: jest.fn(),
    };

    it("renders the avatar", () => {
        const { getByTestId } = render(<AccountHeader {...props} />);
        expect(getByTestId("avatar")).toBeTruthy();
    });

    it("renders the icons", () => {
        const { getByTestId } = render(<AccountHeader {...props} />);
        expect(getByTestId("location")).toBeTruthy();
        expect(getByTestId("calendar")).toBeTruthy();
        expect(getByTestId("more")).toBeTruthy();
        expect(getByTestId("edit")).toBeTruthy();
    });

    it("renders the text", () => {
        const { getByText } = render(<AccountHeader {...props} />);
        expect(getByText("Name")).toBeTruthy();
        expect(getByText("Title")).toBeTruthy();
        expect(getByText("Location")).toBeTruthy();
        expect(getByText("Joined March 2022")).toBeTruthy();
    });

    it("handles the onPress callbacks", () => {
        const { getByTestId, getByText } = render(<AccountHeader {...props} />);
        fireEvent.press(getByTestId("edit"));
        expect(props.onPressEdit).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("See more"));
        expect(props.onPressSeeMore).toHaveBeenCalledTimes(1);
    });
});
