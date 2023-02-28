import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { FlatIconButton } from "../FlatIconButton";
import { IFlatIconButtonProps } from "../FlatIconButton.types";

describe("FlatIconButton Atom", () => {
    const props: IFlatIconButtonProps = {
        icon: "picture",
        onPress: jest.fn(),
    };

    it("does not handle the onPress callback when disabled", () => {
        const { getByTestId } = render(<FlatIconButton {...props} disabled />);
        fireEvent.press(getByTestId("flat-icon-button"));
        expect(props.onPress).toHaveBeenCalledTimes(0);
    });

    it("handles the onPress callback", () => {
        const { getByTestId } = render(<FlatIconButton {...props} />);
        fireEvent.press(getByTestId("flat-icon-button"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
