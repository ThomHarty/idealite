import {fireEvent, render} from '@testing-library/react-native';

import {ProfileSwipeButtons} from '../ProfileSwipeButtons';
import {IProfileSwipeButtonsProps} from '../ProfileSwipeButtons.types';

describe('ProfileSwipeButtons Molecule', () => {
  const props: IProfileSwipeButtonsProps = {
    onPressCross: jest.fn(),
    onPressStar: jest.fn(),
    onPressTick: jest.fn(),
  };

  it('handles the onPress callbacks', () => {
    const {getByTestId} = render(<ProfileSwipeButtons {...props} />);
    fireEvent.press(getByTestId('cross'));
    expect(props.onPressCross).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('star'));
    expect(props.onPressStar).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('tick'));
    expect(props.onPressTick).toHaveBeenCalledTimes(1);
  });
});
