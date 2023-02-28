import { fireEvent, render } from "@testing-library/react-native";

import { SwitchNavItem } from "../SwitchNavItem";
import { ISwitchNavItemProps } from "../SwitchNavItem.types";

describe("SwitchNavItem Molecule", () => {
    const props: ISwitchNavItemProps = {
        text: "Insights",
        switchProps: {
            checked: true,
            onPress: jest.fn(),
        }
    };

    it("renders the text", () => {
        const { getByText } = render(<SwitchNavItem {...props} />);
        expect(getByText("Insights")).toBeTruthy();
    });

    it("handle the onPress callback", () => {
        const { getByTestId } = render(<SwitchNavItem {...props} />);
        fireEvent.press(getByTestId("switch"));
        expect(props.switchProps.onPress).toHaveBeenCalledTimes(1);
    });
});
