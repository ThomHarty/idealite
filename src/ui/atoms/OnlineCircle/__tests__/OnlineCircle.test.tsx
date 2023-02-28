import React from "react";
import { render } from "@testing-library/react-native";

import { OnlineCircle } from "../OnlineCircle";

describe("OnlineCircle Atom", () => {
    it("renders", () => {
        const { getByTestId } = render(<OnlineCircle online />);

        expect(getByTestId("online-circle")).toBeTruthy();
    });
});
