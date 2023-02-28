import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Dropdown } from "../Dropdown";
import { IDropdownProps } from "../Dropdown.types";

describe("Dropdown Atom", () => {
    const props: IDropdownProps = {
        label: "Dropdown",
        items: [
            { key: "One", value: "Item one" },
            { key: "Two", value: "Item two" },
        ],
        onItemSelected: jest.fn(),
    };

    it("renders the label", () => {
        const { getByText } = render(<Dropdown {...props} />);
        expect(getByText("Dropdown")).toBeTruthy();
    });

    it("does not render the items when not open", () => {
        const { queryByText } = render(<Dropdown {...props} />);
        expect(queryByText("Item one")).toBeFalsy();
        expect(queryByText("Item two")).toBeFalsy();
    });

    it("renders the items when open", () => {
        const { getByText, getByTestId } = render(<Dropdown {...props} />);
        fireEvent.press(getByTestId("open-dropdown"));
        expect(getByText("Select")).toBeTruthy();
        expect(getByText("Item one")).toBeTruthy();
        expect(getByText("Item two")).toBeTruthy();
    });

    it("does not render select when item clicked", () => {
        const { getByText, queryByText, getByTestId } = render(<Dropdown {...props} />);
        fireEvent.press(getByTestId("open-dropdown"));
        fireEvent.press(getByText("Item one"));
        expect(queryByText("Select")).toBeFalsy();
    });

    it("renders selected item key when closed", () => {
        const { getByText, getByTestId } = render(<Dropdown {...props} />);
        fireEvent.press(getByTestId("open-dropdown"));
        fireEvent.press(getByText("Item one"));
        fireEvent.press(getByTestId("open-dropdown"));
        expect(getByText("One")).toBeTruthy();
    });

    it("renders the selected item", () => {
        const { getByText } = render(<Dropdown {...props} selected={{ key: "One", value: "Item one" }} />);
        expect(getByText("One")).toBeTruthy();
    });
});
