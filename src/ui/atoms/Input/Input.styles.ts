import {COLORS} from '../../../theme';
import {InputStyles} from './Input.types';

export const baseStyles: InputStyles = {
  container: {},
  inputWrapper: {
    width: '100%',
    borderBottomWidth: 2,
    marginTop: -5,
  },
  input: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    color: COLORS.PRIMARY,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
  },
  labelText: {
    position: 'relative',
    color: COLORS.GREY_DARK,
  },
  errorContainer: {
    paddingVertical: 15,
  },
  errorText: {
    color: COLORS.DANGER,
    fontSize: 14,
  },
  icon: {
    color: COLORS.GREY_DARK,
    fontSize: 16,
    position: 'relative',
    top: 8,
  },
};
