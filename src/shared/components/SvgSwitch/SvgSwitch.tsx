import React, { ReactElement } from "react";
import * as SVG from "../../../theme/svg";
import { ISvgSwitchProps } from "./SvgSwitch.types";

export const SvgSwitch = ({
    svg,
    testID,
}: ISvgSwitchProps): ReactElement => {
    switch(svg) {
        case "arrow":
            return <SVG.SwipeArrow testID={testID} />
        case "chemist":
            return <SVG.SwipeChemist testID={testID} />
        case "click":
            return <SVG.SwipeClick testID={testID} />
        case "dollar":
            return <SVG.SwipeDollar testID={testID} />
        case "electric":
            return <SVG.SwipeElectric testID={testID} />
        case "globe":
            return <SVG.SwipeGlobe testID={testID} />
        case "hand":
            return <SVG.SwipeHand testID={testID} />
        case "laptop":
            return <SVG.SwipeLaptop testID={testID} />
        case "pencil":
            return <SVG.SwipePencil testID={testID} />
        case "phone":
            return <SVG.SwipePhone testID={testID} />
        case "pills":
            return <SVG.SwipePills testID={testID} />
        case "plane":
            return <SVG.SwipePlane testID={testID} />
        case "pound":
            return <SVG.SwipePound testID={testID} />
        case "spanner":
            return <SVG.SwipeSpanner testID={testID} />
        case "tshirt":
            return <SVG.SwipeTShirt testID={testID} />
        case "passport":
            return <SVG.Passport testID={testID} />
        case "license":
            return <SVG.DriversLicense testID={testID} />
        default:
            return <SVG.SwipePhone testID={testID} />
    }
};
