import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Modal } from "../Modal";
import { IModalProps } from "../Modal.types";
import { Text } from "react-native";

describe("Modal Atom", () => {
    const props: IModalProps = {
        open: false,
        onClose: jest.fn(),
        children: <Text>child component</Text>
    };

    it("does not render when open is false", () => {
        const { queryByText, queryByTestId } = render(<Modal {...props} />);
        expect(queryByText("child component")).toBeFalsy();
        expect(queryByTestId("modal-cross-icon")).toBeFalsy();
    });

    it("renders the icon when open", () => {
        const { getByTestId } = render(<Modal {...props} open />);
        expect(getByTestId("modal-cross-icon")).toBeTruthy();
    });

    it("renders the children when open", () => {
        const { getByText } = render(<Modal {...props} open />);
        expect(getByText("child component")).toBeTruthy();
    });

    it("renders the onClose callback when open", () => {
        const { getByTestId } = render(<Modal {...props} open />);
        fireEvent.press(getByTestId("modal-cross-icon"));
        expect(props.onClose).toHaveBeenCalledTimes(1);
    });
});
