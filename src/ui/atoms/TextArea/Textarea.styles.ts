import {COLORS} from '../../../theme';
import {TextAreaStyles} from './TextArea.types';

export const baseStyles: TextAreaStyles = {
  input: {
    height: 274,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 10,
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    color: COLORS.PRIMARY,
    fontSize: 14,
    backgroundColor: COLORS.WHITE,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  text: {
    marginTop: 18,
    fontSize: 14,
    color: COLORS.GREY_DARK,
  },
};
