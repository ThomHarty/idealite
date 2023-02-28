import {StyleSheet} from 'react-native';
import {SwipeButtonsStyles} from './SwipeButtons.types';

export const baseStyles: SwipeButtonsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    left: 10,
  },
  smallIconContainer: {
    width: 60,
  },
  largeIconContainer: {
    width: 78,
  },
});
