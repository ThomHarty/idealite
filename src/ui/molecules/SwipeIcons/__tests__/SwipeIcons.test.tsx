import {fireEvent, render} from '@testing-library/react-native';

import {SwipeIcons} from '../SwipeIcons';
import {ISwipeIconsProps} from '../SwipeIcons.types';

describe('SwipeIcons Molecule', () => {
  const props: ISwipeIconsProps = {
    leftOnPress: jest.fn(),
    rightOnPress: jest.fn(),
  };

  it('handle the onPress callbacks', () => {
    const {getByTestId} = render(<SwipeIcons {...props} />);

    fireEvent.press(getByTestId('left-press'));
    expect(props.leftOnPress).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('right-press'));
    expect(props.rightOnPress).toHaveBeenCalledTimes(1);
  });
});
