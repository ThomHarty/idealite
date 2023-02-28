import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react-native";

import { Checkbox } from "../Checkbox";
import { ICheckboxProps } from "../Checkbox.types";

describe("Checkbox Atom", () => {
    const props: ICheckboxProps = {
        checked: false,
        onPress: jest.fn(),
    };

    it("handles the onPress callback", () => {
        const { getByTestId } = render(<Checkbox {...props} />);
        expect(getByTestId("checkbox")).toBeTruthy();
        fireEvent.press(getByTestId("checkbox"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });

    it("does not handle the onPress callback when disabled", () => {
        const { getByTestId } = render(<Checkbox {...props} disabled />);
        expect(getByTestId("checkbox")).toBeTruthy();
        fireEvent.press(getByTestId("checkbox"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
