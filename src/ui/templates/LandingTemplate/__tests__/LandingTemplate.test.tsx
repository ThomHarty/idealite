import { fireEvent, render } from "@testing-library/react-native";

import { LandingTemplate } from "../LandingTemplate";
import { ILandingTemplateProps } from "../LandingTemplate.types";

describe("Landing Template", () => {
    const props: ILandingTemplateProps = {
        onPressGoogle: jest.fn(),
        onPressApple: jest.fn(),
        onPressFacebook: jest.fn(),
        onPressCreateAccount: jest.fn(),
        onPressSignIn: jest.fn()
    };

    it("renders the cta text", () => {
        const { getByText } = render(<LandingTemplate {...props} />);
        expect(getByText("New user?"));
    });

    it("handles the onPress callbacks", () => {
        const { getByText } = render(<LandingTemplate {...props} />);
        fireEvent.press(getByText("Sign in with Google"));
        expect(props.onPressGoogle).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("Sign in with Apple"));
        expect(props.onPressApple).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("Sign in with Facebook"));
        expect(props.onPressFacebook).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("Create account"));
        expect(props.onPressCreateAccount).toHaveBeenCalledTimes(1);
        fireEvent.press(getByText("Sign in"));
        expect(props.onPressSignIn).toHaveBeenCalledTimes(1);
    });
});
