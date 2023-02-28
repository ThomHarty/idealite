import { render } from "@testing-library/react-native";
import { Text } from "react-native";

import { LinearBackground } from "../LinearBackground";

describe("LinearBackground Atom", () => {
    it("renders children", () => {
        const { getByText } = render(
            <LinearBackground>
                <Text>test</Text>
            </LinearBackground>
        );

        expect(getByText("test")).toBeTruthy();
    });
});
