import React from "react";
import { render } from "@testing-library/react-native";

import { Image } from "../Image";
import { IImageProps } from "../Image.types";

describe("Image Atom", () => {
    const props: IImageProps = {
        src: "",
    };

    it("renders", () => {
        const { getByTestId } = render(<Image {...props} />);
        expect(getByTestId("image")).toBeTruthy();
    });
});
