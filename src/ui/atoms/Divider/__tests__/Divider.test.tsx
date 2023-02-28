import React from "react";
import { render } from "@testing-library/react-native";

import { Divider } from "../Divider";

describe("Divider Atom", () => {
    it("renders", () => {
        const { getByTestId } = render(<Divider />);
        expect(getByTestId("divider")).toBeTruthy();
    });
});
