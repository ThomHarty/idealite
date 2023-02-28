import React from 'react';
import {Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {OnPress} from '../OnPress';
import {IOnPressProps} from '../OnPress.types';

describe('OnPress Atom', () => {
  const props: IOnPressProps = {
    children: <Text>child</Text>,
    onPress: jest.fn(),
  };

  it('renders a single child', () => {
    const {getByText} = render(<OnPress {...props} />);
    expect(getByText('child')).toBeTruthy();
  });

  it('handles the onPress callback', () => {
    const {getByText} = render(<OnPress {...props} />);
    fireEvent.press(getByText('child'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
