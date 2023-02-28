import React from "react";
import { render } from "@testing-library/react-native";

import { ImageBackground } from "../ImageBackground";
import { IImageBackgroundProps } from "../ImageBackground.types";

describe("ImageBackground Atom", () => {
    const props: IImageBackgroundProps = {
        src: "",
        containerStyles: { flex: 1 }
    };

    it("renders", () => {
        const { getByTestId } = render(<ImageBackground {...props} />);
        expect(getByTestId("image-background")).toBeTruthy();
    });
});
