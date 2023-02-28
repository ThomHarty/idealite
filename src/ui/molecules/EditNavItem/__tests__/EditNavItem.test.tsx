import { fireEvent, render } from "@testing-library/react-native";

import { EditNavItem } from "../EditNavItem";
import { IEditNavItemProps } from "../EditNavItem.types";

describe("EditNavItem Molecule", () => {
    const props: IEditNavItemProps = {
        text: "Cyber",
        subText: "Oracle",
        details: "Lorem ipsum",
        onPress: jest.fn(),
    };

    it("renders the text", () => {
        const { getByText } = render(<EditNavItem {...props} />);
        expect(getByText("Cyber")).toBeTruthy();
    });

    it("renders the subText", () => {
        const { getByText } = render(<EditNavItem {...props} />);
        expect(getByText("Oracle")).toBeTruthy();
    });

    it("renders the details", () => {
        const { getByText } = render(<EditNavItem {...props} />);
        expect(getByText("Lorem ipsum")).toBeTruthy();
    });

    it("handle the onPress callback", () => {
        const { getByText } = render(<EditNavItem {...props} />);
        fireEvent.press(getByText("Cyber"));
        expect(props.onPress).toHaveBeenCalledTimes(1);
    });
});
