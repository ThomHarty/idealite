import {fireEvent, render} from '@testing-library/react-native';

import {SwipeButtons} from '../SwipeButtons';
import {ISwipeButtonsProps} from '../SwipeButtons.types';

describe('SwipeButtons Molecule', () => {
  const props: ISwipeButtonsProps = {
    onPressRewind: jest.fn(),
    onPressCross: jest.fn(),
    onPressTick: jest.fn(),
    onPressStar: jest.fn(),
  };

  it('does not handle the onPress callbacks when disabled', () => {
    const {getByTestId} = render(<SwipeButtons {...props} disabled />);
    fireEvent.press(getByTestId('rewind'));
    expect(props.onPressRewind).toHaveBeenCalledTimes(0);
    fireEvent.press(getByTestId('cross'));
    expect(props.onPressCross).toHaveBeenCalledTimes(0);
    fireEvent.press(getByTestId('tick'));
    expect(props.onPressTick).toHaveBeenCalledTimes(0);
    fireEvent.press(getByTestId('star'));
    expect(props.onPressStar).toHaveBeenCalledTimes(0);
  });

  it('handles the onPress callbacks', () => {
    const {getByTestId} = render(<SwipeButtons {...props} />);
    fireEvent.press(getByTestId('rewind'));
    expect(props.onPressRewind).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('cross'));
    expect(props.onPressCross).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('tick'));
    expect(props.onPressTick).toHaveBeenCalledTimes(1);
    fireEvent.press(getByTestId('star'));
    expect(props.onPressStar).toHaveBeenCalledTimes(1);
  });
});
