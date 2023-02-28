import { render } from "@testing-library/react-native";

import { NDAInviteResponse } from "../NDAInviteResponse";

describe("NDAInviteResponse Molecule", () => {
    it("renders the correct declined by authedUser text and icon", () => {
        const { getByText, queryByText, getByTestId } = render(
            <NDAInviteResponse
                name="Amir"
                status="declined"
                isFromAuthedUser
            />
        );

        expect(queryByText("Amir")).toBeFalsy();
        expect(getByText("You have declined the NDA")).toBeTruthy();
        expect(getByTestId("cross")).toBeTruthy();
    });

    it("renders the correct accepted by authedUser text and icon", () => {
        const { getByText, queryByText, getByTestId } = render(
            <NDAInviteResponse name="Amir" isFromAuthedUser />
        );

        expect(queryByText("Amir")).toBeFalsy();
        expect(getByText("You have accepted the NDA")).toBeTruthy();
        expect(getByTestId("tick")).toBeTruthy();
    });

    it("renders the correct declined by other user text and icon", () => {
        const { getByText, queryByText, getByTestId } = render(
            <NDAInviteResponse name="Amir" status="declined" />
        );

        expect(queryByText("Amir")).toBeFalsy();
        expect(getByText("Amir has declined the NDA")).toBeTruthy();
        expect(getByTestId("cross")).toBeTruthy();
    });

    it("renders the correct accepted by other user text and icon", () => {
        const { getByText, queryByText, getByTestId } = render(
            <NDAInviteResponse name="Amir" />
        );

        expect(queryByText("Amir")).toBeFalsy();
        expect(getByText("Amir has accepted the NDA")).toBeTruthy();
        expect(getByTestId("tick")).toBeTruthy();
    });
});
