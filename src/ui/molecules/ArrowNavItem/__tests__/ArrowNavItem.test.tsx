import {fireEvent, render} from '@testing-library/react-native';

import {ArrowNavItem} from '../ArrowNavItem';
import {IArrowNavItemProps} from '../ArrowNavItem.types';

describe('ArrowNavItem Molecule', () => {
  const props: IArrowNavItemProps = {
    text: 'Account',
    onPress: jest.fn(),
  };

  it('renders the text', () => {
    const {getByText} = render(<ArrowNavItem {...props} />);
    expect(getByText('Account')).toBeTruthy();
  });

  it('handle the onPress callback', () => {
    const {getByText} = render(<ArrowNavItem {...props} />);
    fireEvent.press(getByText('Account'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
