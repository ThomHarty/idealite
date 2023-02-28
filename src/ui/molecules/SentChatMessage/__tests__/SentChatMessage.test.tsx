import {render} from '@testing-library/react-native';

import {SentChatMessage} from '../SentChatMessage';
import {ISentChatMessageProps} from '../SentChatMessage.types';

describe('SentChatMessage Molecule', () => {
  const props: ISentChatMessageProps = {
    message: 'Hello',
    readTime: '17:52',
  };

  it('renders the message', () => {
    const {getByText} = render(<SentChatMessage {...props} />);
    expect(getByText('Hello')).toBeTruthy();
  });

  it('renders the readTime', () => {
    const {getByText} = render(<SentChatMessage {...props} />);
    expect(getByText('Read: 17:52')).toBeTruthy();
  });

  it('renders the avatar', () => {
    const {getByTestId} = render(<SentChatMessage {...props} />);
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('does not render Read: when no readTime is passed', () => {
    const {queryByText} = render(
      <SentChatMessage {...props} readTime={undefined} />,
    );
    expect(queryByText('Read: 17:52')).toBeFalsy();
    expect(queryByText('Read:')).toBeFalsy();
  });
});
