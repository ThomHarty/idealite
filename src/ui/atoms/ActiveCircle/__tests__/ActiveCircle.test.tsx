import React from "react";
import { render } from "@testing-library/react-native";

import { ActiveCircle } from "../ActiveCircle";

describe("ActiveCircle Atom", () => {
    it("renders", () => {
        const { getByTestId } = render(<ActiveCircle active />);

        expect(getByTestId("active-circle")).toBeTruthy();
    });
});
