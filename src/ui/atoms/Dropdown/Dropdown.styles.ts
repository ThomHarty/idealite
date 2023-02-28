import {COLORS} from '../../../theme';
import {DropdownStyles} from './Dropdown.types';

export const baseStyles: DropdownStyles = {
  label: {
    position: 'relative',
    color: COLORS.GREY_DARK,
  },
  selectedContainer: {
    width: '100%',
    borderBottomWidth: 2,
    paddingTop: 6,
    paddingBottom: 10,
    height: 40,
    position: 'relative',
  },
  selectedText: {
    fontSize: 18,
    color: COLORS.PRIMARY,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 13,
  },
  icon: {
    fontSize: 10,
  },
  dropdownContainer: {
    zIndex: 99,
  },
  dropdownWrapper: {
    width: 240,
    height: 160,
    position: 'absolute',
    top: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    // shadow
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedValueContainer: {
    width: 240,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  selectedValueText: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
  itemContainer: {
    width: 240,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    color: COLORS.PRIMARY,
  },
  flatlistContainer: {
    height: 160,
  },
};
