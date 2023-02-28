import React from 'react';
import {Text} from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

import {LogoHeader} from '../LogoHeader';
import {ILogoHeaderProps} from '../LogoHeader.types';

describe('LogoHeader Molecule', () => {
  const props: ILogoHeaderProps = {
    children: <Text>children</Text>,
    onPressBack: jest.fn(),
  };

  it('renders the children', () => {
    const {getByText} = render(<LogoHeader {...props} />);
    expect(getByText('children')).toBeTruthy();
  });

  it('renders the chevron and handles the onPressBack callback', () => {
    const {getByTestId} = render(<LogoHeader {...props} />);
    expect(getByTestId('chevron')).toBeTruthy();
    fireEvent.press(getByTestId('chevron'));
    expect(props.onPressBack).toHaveBeenCalledTimes(1);
  });

  it('does not render the chevron when the onPressBack callback is not passed', () => {
    const {queryByTestId} = render(
      <LogoHeader {...props} onPressBack={undefined} />,
    );
    expect(queryByTestId('chevron')).toBeFalsy();
  });
});
