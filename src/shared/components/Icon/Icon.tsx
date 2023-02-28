import React, { memo, ReactElement } from "react";

import CustomIcon from "./setup/CustomIcon";
import { IIconProps } from "./Icon.types";

export const Icon = memo(({
  name,
  iconStyles,
  testID,
}: IIconProps): ReactElement => {
    return <CustomIcon name={name} style={iconStyles} testID={testID} />
});
