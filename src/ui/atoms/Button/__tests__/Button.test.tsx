import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Button} from '../Button';
import {IButtonProps} from '../Button.types';

describe('Button Atom', () => {
  const props: IButtonProps = {
    text: 'Test Text',
    onPress: jest.fn(),
  };

  it('renders the text', () => {
    const {getByText} = render(<Button {...props} />);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('handles the onPress method', () => {
    const {getByText} = render(<Button {...props} />);
    fireEvent.press(getByText('Test Text'));
    expect(props.onPress).toBeCalledTimes(1);
  });

  it('renders the icon', () => {
    const {getByTestId} = render(<Button {...props} icon="bin" />);
    expect(getByTestId('button-icon')).toBeTruthy();
  });
});
