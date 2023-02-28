import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme';
import {ProfileSwipeButtonsStyles} from './ProfileSwipeButtons.types';

export const baseStyles: ProfileSwipeButtonsStyles = StyleSheet.create({
  container: {
    height: 62,
    width: 218,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 8,
  },
});
