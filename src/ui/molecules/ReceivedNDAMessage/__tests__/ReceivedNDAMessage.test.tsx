import { fireEvent, render } from "@testing-library/react-native";
import { beforeName, afterName } from "../fixtures/message";

import { ReceivedNDAMessage } from "../ReceivedNDAMessage";
import { IReceivedNDAMessageProps } from "../ReceivedNDAMessage.types";

describe("ReceivedNDAMessage Molecule", () => {
    const props: IReceivedNDAMessageProps = {
        name: "Amir Abbas",
        onPress: jest.fn(),
    };

    it("renders the header", () => {
        const { getByText } = render(<ReceivedNDAMessage {...props} />);
        expect(getByText("Non-disclosure agreement")).toBeTruthy();
    });

    it("renders the message", () => {
        const { getByText } = render(<ReceivedNDAMessage {...props} />);
        expect(getByText(`${beforeName}${props.name}${afterName}`)).toBeTruthy();
    });

    it("renders the footer", () => {
        const { getByText } = render(<ReceivedNDAMessage {...props} />);
        expect(getByText("View NDA")).toBeTruthy();
    });

    it("renders the avatar", () => {
        const { getByTestId } = render(<ReceivedNDAMessage {...props} />);
        expect(getByTestId("avatar")).toBeTruthy();
    });

    it("renders the icon", () => {
        const { getByTestId } = render(<ReceivedNDAMessage {...props} />);
        expect(getByTestId("icon")).toBeTruthy();
    });

    it("handles the onPress callback", () => {
        const { getByText } = render(<ReceivedNDAMessage {...props} />);
        fireEvent.press(getByText("View NDA"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
