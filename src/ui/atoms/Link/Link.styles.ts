import {StyleSheet} from 'react-native';
import {LinkStyles} from './Link.types';

export const baseStyles: LinkStyles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
