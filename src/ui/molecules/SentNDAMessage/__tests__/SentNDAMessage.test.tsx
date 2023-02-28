import { fireEvent, render } from "@testing-library/react-native";
import { beforeName, afterName } from "../fixtures/message";

import { SentNDAMessage } from "../SentNDAMessage";
import { ISentNDAMessageProps } from "../SentNDAMessage.types";

describe("SentNDAMessage Molecule", () => {
    const props: ISentNDAMessageProps = {
        name: "Amir Abbas",
        readTime: "17:52",
        onPress: jest.fn(),
    };

    it("renders the header", () => {
        const { getByText } = render(<SentNDAMessage {...props} />);
        expect(getByText("Non-disclosure agreement")).toBeTruthy();
    });

    it("renders the message", () => {
        const { getByText } = render(<SentNDAMessage {...props} />);
        expect(getByText(`${beforeName}${props.name}${afterName}`)).toBeTruthy();
    });

    it("renders the footer", () => {
        const { getByText } = render(<SentNDAMessage {...props} />);
        expect(getByText("View NDA")).toBeTruthy();
    });

    it("renders the readTime", () => {
        const { getByText } = render(<SentNDAMessage {...props} />);
        expect(getByText("Read: 17:52")).toBeTruthy();
    });

    it("renders the avatar", () => {
        const { getByTestId } = render(<SentNDAMessage {...props} />);
        expect(getByTestId("avatar")).toBeTruthy();
    });

    it("renders the icon", () => {
        const { getByTestId } = render(<SentNDAMessage {...props} />);
        expect(getByTestId("icon")).toBeTruthy();
    });

    it("does not render Read: when no readTime is passed", () => {
        const { queryByText } = render(
                <SentNDAMessage
                    {...props}
                    readTime={undefined}
                />
            );
        expect(queryByText("Read: 17:52")).toBeFalsy();
        expect(queryByText("Read:")).toBeFalsy();
    });

    it("handles the onPress callback", () => {
        const { getByText } = render(<SentNDAMessage {...props} />);
        fireEvent.press(getByText("View NDA"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
