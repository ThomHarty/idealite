import React from "react";
import { Text } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import { TextHeader } from "../TextHeader";
import { ITextHeaderProps } from "../TextHeader.types";

describe("TextHeader Molecule", () => {
    const props: ITextHeaderProps = {
        children: <Text>children</Text>,
        onPressBack: jest.fn(),
        text: "Text"
    };

    it("renders the text", () => {
        const { getByText } = render(<TextHeader {...props} />);
        expect(getByText("Text")).toBeTruthy();
    });

    it("renders the children", () => {
        const { getByText } = render(<TextHeader {...props} />);
        expect(getByText("children")).toBeTruthy();
    });

    it("renders the chevron and handles the onPressBack callback", () => {
        const { getByTestId } = render(<TextHeader {...props} />);
        expect(getByTestId("chevron")).toBeTruthy();
        fireEvent.press(getByTestId("chevron"));
        expect(props.onPressBack).toHaveBeenCalledTimes(1);
    });

    it("does not render the chevron when the onPressBack callback is not passed", () => {
        const { queryByTestId } = render(<TextHeader {...props} onPressBack={undefined} />);
        expect(queryByTestId("chevron")).toBeFalsy();
    });
});
