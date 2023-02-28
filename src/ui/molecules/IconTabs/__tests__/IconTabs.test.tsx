import React from "react";
import { render } from "@testing-library/react-native";

import { IconTabs } from "../IconTabs";
import { IIconTabsProps } from "../IconTabs.types";
import { Text } from "react-native";

describe("IconTabs Atom", () => {
    const props: IIconTabsProps = {
        tabOneContent: <Text>One</Text>,
        tabTwoContent: <Text>Two</Text>,
        tabThreeContent: <Text>Three</Text>
    };

    it("renders the tab content", () => {
        const { getByText } = render(<IconTabs {...props} />);
        expect(getByText("One")).toBeTruthy();
        expect(getByText("Two")).toBeTruthy();
        expect(getByText("Three")).toBeTruthy();
    });
});
