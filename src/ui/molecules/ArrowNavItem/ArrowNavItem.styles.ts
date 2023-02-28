import {StyleSheet} from 'react-native';

import {ArrowNavItemStyles} from './ArrowNavItem.types';

export const baseStyles: ArrowNavItemStyles = StyleSheet.create({
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
