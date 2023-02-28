import {ViewStyle} from 'react-native';

import {ISwitchProps} from '../../atoms';

export interface ISwitchNavItemProps {
  text: string;
  switchProps: ISwitchProps;
}

export interface SwitchNavItemStyles {
  container?: ViewStyle;
}
