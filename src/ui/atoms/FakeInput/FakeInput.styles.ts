import {COLORS} from '../../../theme';
import {FakeInputStyles} from './FakeInput.types';

export const baseStyles: FakeInputStyles = {
  label: {
    position: 'relative',
    color: COLORS.GREY_DARK,
  },
  textContainer: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.ACCENT_ONE,
    paddingTop: 6,
    paddingBottom: 10,
    height: 40,
    position: 'relative',
  },
  text: {
    fontSize: 18,
    color: COLORS.PRIMARY,
  },
};
