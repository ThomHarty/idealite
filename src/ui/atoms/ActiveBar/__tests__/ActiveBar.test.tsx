import React from "react";
import { render } from "@testing-library/react-native";

import { ActiveBar } from "../ActiveBar";

describe("ActiveBar Atom", () => {
    it("renders", () => {
        const { getByTestId } = render(<ActiveBar active />);

        expect(getByTestId("active-bar")).toBeTruthy();
    });
});
