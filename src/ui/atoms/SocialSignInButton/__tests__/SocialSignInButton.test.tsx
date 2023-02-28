import {fireEvent, render} from '@testing-library/react-native';

import {SocialSignInButton} from '../SocialSignInButton';
import {ISocialSignInButtonProps} from '../SocialSignInButton.types';

describe('SocialSignInButton Atom', () => {
  const props: ISocialSignInButtonProps = {
    variant: 'Google',
    onPress: jest.fn(),
  };

  it('renders the google text', () => {
    const {getByText} = render(<SocialSignInButton {...props} />);
    expect(getByText('Sign in with Google')).toBeTruthy();
  });

  it('renders the apple text', () => {
    const {getByText} = render(
      <SocialSignInButton {...props} variant="Apple" />,
    );
    expect(getByText('Sign in with Apple')).toBeTruthy();
  });

  it('renders the facebook text', () => {
    const {getByText} = render(
      <SocialSignInButton {...props} variant="Facebook" />,
    );
    expect(getByText('Sign in with Facebook')).toBeTruthy();
  });

  it('handles the onPress callback', () => {
    const {getByText} = render(<SocialSignInButton {...props} />);
    fireEvent.press(getByText('Sign in with Google'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
