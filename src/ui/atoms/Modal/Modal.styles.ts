import {COLORS} from '../../../theme';
import {ModalStyles} from './Modal.types';

export const baseStyles: ModalStyles = {
  container: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    position: 'relative',
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
  iconContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  icon: {
    fontSize: 12,
    color: COLORS.GREY,
  },
};
