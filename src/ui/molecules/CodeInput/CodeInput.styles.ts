import {StyleSheet} from 'react-native';

import {COLORS} from '../../../theme';
import {CodeInputStyles} from './CodeInput.types';

export const baseStyles: CodeInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.ACCENT_ONE,
    margin: 3,
  },
  input: {
    width: 40,
    height: 40,
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    fontSize: 22,
    color: COLORS.PRIMARY,
  },
  errorContainer: {
    paddingTop: 15,
    alignItems: 'center',
  },
  errorText: {
    color: COLORS.DANGER,
    fontSize: 14,
  },
});
