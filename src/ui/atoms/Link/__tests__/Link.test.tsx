import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Link } from "../Link";
import { ILinkProps } from "../Link.types";

describe("Link Atom", () => {
    const props: ILinkProps = {
        text: "Test Text",
        onPress: jest.fn(),
    };

    it("renders the text", () => {
        const { getByText } = render(<Link {...props} />);
        expect(getByText("Test Text")).toBeTruthy();
    });

    it("handles the onPress method", () => {
        const { getByText } = render(<Link {...props} />);
        fireEvent.press(getByText("Test Text"));
        expect(props.onPress).toBeCalledTimes(1);
    });
});
