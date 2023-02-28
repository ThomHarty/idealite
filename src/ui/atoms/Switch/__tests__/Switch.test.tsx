import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Switch } from "../Switch";
import { ISwitchProps } from "../Switch.types";

describe("Switch Atom", () => {
    const props: ISwitchProps = {
        checked: false,
        onPress: jest.fn(),
    };

    it("handles the onPress callback", () => {
        const { getByTestId } = render(<Switch {...props} />);
        expect(getByTestId("switch")).toBeTruthy();
        fireEvent.press(getByTestId("switch"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });

    it("does not handle the onPress callback when disabled", () => {
        const { getByTestId } = render(<Switch {...props} disabled />);
        expect(getByTestId("switch")).toBeTruthy();
        fireEvent.press(getByTestId("switch"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
