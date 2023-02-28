import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {IconButton} from '../IconButton';
import {IIconButtonProps} from '../IconButton.types';

describe('IconButton Atom', () => {
  const props: IIconButtonProps = {
    icon: 'picture',
    onPress: jest.fn(),
  };

  it('does not handle the onPress callback when disabled', () => {
    const {getByTestId} = render(<IconButton {...props} disabled />);
    fireEvent.press(getByTestId('icon-button'));
    expect(props.onPress).toHaveBeenCalledTimes(0);
  });

  it('handles the onPress callback', () => {
    const {getByTestId} = render(<IconButton {...props} />);
    fireEvent.press(getByTestId('icon-button'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
