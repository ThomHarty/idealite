import React from "react";
import { render } from "@testing-library/react-native";

import { Chip } from "../Chip";
import { IChipProps } from "../Chip.types";

describe("Chip Atom", () => {
    const props: IChipProps = {
        text: "Test Text",
    };

    it("renders the text", () => {
        const { getByText } = render(<Chip {...props} />);
        expect(getByText("Test Text")).toBeTruthy();
    });
});
