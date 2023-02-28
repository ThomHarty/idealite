import { fireEvent, render } from "@testing-library/react-native";

import { OnboardingSlidesTemplate } from "../OnboardingSlidesTemplate";
import { IOnboardingSlidesTemplateProps } from "../OnboardingSlidesTemplate.types";

describe("OnboardingSlides Template", () => {
    const props: IOnboardingSlidesTemplateProps = {
        handleSkip: jest.fn(),
        handleGetStarted: jest.fn(),
        slidesText: [
            {
                heading: "First",
                text: "One"
            },
            {
                heading: "Second",
                text: "Two"
            },
            {
                heading: "Third",
                text: "Three"
            }
        ]
    };

    it("handles the handleSkip callback", () => {
        const { getByText } = render(
            <OnboardingSlidesTemplate {...props} />
        );

        fireEvent.press(getByText("Skip"));
        expect(props.handleSkip).toHaveBeenCalledTimes(1);
    });

    it("renders the text and handles the next button", () => {
        const { getByText, queryByText } = render(
            <OnboardingSlidesTemplate {...props} />
        );

        expect(getByText("First")).toBeTruthy();
        expect(getByText("One")).toBeTruthy();
        expect(queryByText("Second")).toBeFalsy();
        expect(queryByText("Two")).toBeFalsy();
        expect(queryByText("Third")).toBeFalsy();
        expect(queryByText("Three")).toBeFalsy();
        fireEvent.press(getByText("Next"));
        expect(queryByText("First")).toBeFalsy();
        expect(queryByText("One")).toBeFalsy();
        expect(getByText("Second")).toBeTruthy();
        expect(getByText("Two")).toBeTruthy();
        expect(queryByText("Third")).toBeFalsy();
        expect(queryByText("Three")).toBeFalsy();
        fireEvent.press(getByText("Next"));
        expect(queryByText("First")).toBeFalsy();
        expect(queryByText("One")).toBeFalsy();
        expect(queryByText("Second")).toBeFalsy();
        expect(queryByText("Two")).toBeFalsy();
        expect(getByText("Third")).toBeTruthy();
        expect(getByText("Three")).toBeTruthy();
    });

    it("handles the handleGetStarted callback from third slide", () => {
        const { getByText } = render(
            <OnboardingSlidesTemplate {...props} />
        );

        fireEvent.press(getByText("Next"));
        fireEvent.press(getByText("Next"));
        fireEvent.press(getByText("Get Started"));
        expect(props.handleGetStarted).toHaveBeenCalledTimes(1);
    });
});
