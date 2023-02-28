import {fireEvent, render} from '@testing-library/react-native';

import {ChatInputBar} from '../ChatInputBar';
import {IChatInputBarProps} from '../ChatInputBar.types';

describe('ChatInputBar Molecule', () => {
  const props: IChatInputBarProps = {
    value: 'Test value',
    onChangeText: jest.fn(),
    onPressPaperclip: jest.fn(),
    onPressDocument: jest.fn(),
    onPressSend: jest.fn(),
  };

  it('renders the value', () => {
    const {getByDisplayValue} = render(<ChatInputBar {...props} />);
    expect(getByDisplayValue('Test value')).toBeTruthy();
  });

  it('handles the onChangeText callback', () => {
    const {getByDisplayValue} = render(<ChatInputBar {...props} />);
    fireEvent.changeText(getByDisplayValue('Test value'));
    expect(props.onChangeText).toHaveBeenCalledTimes(1);
  });

  it('handles the onPressPaperclip callback', () => {
    const {getByTestId} = render(<ChatInputBar {...props} />);
    fireEvent.press(getByTestId('paperclip'));
    expect(props.onPressPaperclip).toHaveBeenCalledTimes(1);
  });

  it('handles the onPressDocument callback', () => {
    const {getByTestId} = render(<ChatInputBar {...props} />);
    fireEvent.press(getByTestId('document'));
    expect(props.onPressDocument).toHaveBeenCalledTimes(1);
  });

  it('handles the onPressSend callback', () => {
    const {getByTestId} = render(<ChatInputBar {...props} />);
    fireEvent.press(getByTestId('sent'));
    expect(props.onPressSend).toHaveBeenCalledTimes(1);
  });
});
