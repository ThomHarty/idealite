import React from "react";
import { render } from "@testing-library/react-native";

import { Typography } from "../Typography";
import { ITypographyProps } from "../Typography.types";

describe("Typography Atom", () => {
    it("renders the text prop", () => {
        const props: ITypographyProps = {
            text: "Test Text",
        };

        const { getByText } = render(<Typography {...props} />);

        expect(getByText("Test Text")).toBeTruthy();
    });
});
