import {StyleSheet} from 'react-native';
import {SwitchStyles} from './Switch.types';

export const baseStyles: SwitchStyles = StyleSheet.create({
  wrapper: {
    width: 56,
  },
  container: {
    width: 56,
    height: 30,
    borderWidth: 2,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: 26,
    height: 26,
    borderRadius: 13,
    right: 13,
  },
});
