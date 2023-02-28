import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Input } from "../Input";
import { IInputProps } from "../Input.types";

describe("Input Atom", () => {
    const props: IInputProps = {
        value: "Test value",
        onChangeText: jest.fn(),
        icon: "visibility",
        iconOnPress: jest.fn(),
    };

    it("renders the value", () => {
        const { getByDisplayValue } = render(<Input {...props} />);
        expect(getByDisplayValue("Test value")).toBeTruthy();
    });

    it("handles the onChangeText callback", () => {
        const { getByDisplayValue } = render(<Input {...props} />);
        fireEvent.changeText(getByDisplayValue("Test value"));
        expect(props.onChangeText).toHaveBeenCalledTimes(1);
    });

    it("renders the icon", () => {
        const { getByTestId } = render(<Input {...props} />);
        expect(getByTestId("input-icon")).toBeTruthy();
    });

    it("handles the iconOnPress callback", () => {
        const { getByTestId } = render(<Input {...props} />);
        fireEvent.press(getByTestId("input-icon"));
        expect(props.iconOnPress).toHaveBeenCalledTimes(1);
    });
});
