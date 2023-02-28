import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { RadioButton } from "../RadioButton";
import { IRadioButtonProps } from "../RadioButton.types";

describe("RadioButton Atom", () => {
    const props: IRadioButtonProps = {
        checked: false,
        onPress: jest.fn(),
    };

    it("handles the onPress callback", () => {
        const { getByTestId } = render(<RadioButton {...props} />);
        expect(getByTestId("radio-button")).toBeTruthy();
        fireEvent.press(getByTestId("radio-button"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });

    it("does not handle the onPress callback when disabled", () => {
        const { getByTestId } = render(<RadioButton {...props} disabled />);
        expect(getByTestId("radio-button")).toBeTruthy();
        fireEvent.press(getByTestId("radio-button"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
