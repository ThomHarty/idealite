import { render } from "@testing-library/react-native";

import { AvatarStatus } from "../AvatarStatus";

describe("AvatarStatus Molecule", () => {
    it("renders", () => {
        const { getByTestId } = render(<AvatarStatus />);

        expect(getByTestId("avatar-status")).toBeTruthy();
    });
});
