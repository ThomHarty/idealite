import { fireEvent, render } from "@testing-library/react-native";

import { FilterChoice } from "../FilterChoice";
import { IFilterChoiceProps } from "../FilterChoice.types";

describe("FilterChoice Molecule", () => {
    const props: IFilterChoiceProps = {
        onTabChanged: jest.fn(),
    };

    it("renders the Ideas tab text", () => {
        const { getByText } = render(<FilterChoice {...props} />);
        expect(getByText("Ideas")).toBeTruthy();
    });

    it("renders the Skills tab text", () => {
        const { getByText } = render(<FilterChoice {...props} />);
        expect(getByText("Skills")).toBeTruthy();
    });

    it("handles the onTabChanged callback", () => {
        const { getByText } = render(<FilterChoice {...props} />);
        fireEvent.press(getByText("Ideas"));
        expect(props.onTabChanged).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("Skills"));
        expect(props.onTabChanged).toHaveBeenCalledTimes(2);
    });
});
