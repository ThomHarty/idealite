import {StyleSheet} from 'react-native';

import {SwitchNavItemStyles} from './SwitchNavItem.types';

export const baseStyles: SwitchNavItemStyles = StyleSheet.create({
  container: {
    paddingTop: 17,
    paddingRight: 34,
    paddingBottom: 17,
    paddingLeft: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
