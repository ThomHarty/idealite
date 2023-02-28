import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { TextArea } from "../TextArea";
import { ITextAreaProps } from "../TextArea.types";

describe("TextArea Atom", () => {
    const props: ITextAreaProps = {
        value: "Test value",
        onChangeText: jest.fn(),
        limit: 12,
    };

    it("renders the value", () => {
        const { getByDisplayValue } = render(<TextArea {...props} />);
        expect(getByDisplayValue("Test value")).toBeTruthy();
    });

    it("handles the onChangeText callback", () => {
        const { getByDisplayValue } = render(<TextArea {...props} />);
        fireEvent.changeText(getByDisplayValue("Test value"));
        expect(props.onChangeText).toHaveBeenCalledTimes(1);
    });

    it("renders the limit", () => {
        const { getByText } = render(<TextArea {...props} />);
        expect(getByText("10/12")).toBeTruthy();
    });
});
