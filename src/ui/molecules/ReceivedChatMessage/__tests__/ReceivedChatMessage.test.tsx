import {render} from '@testing-library/react-native';

import {ReceivedChatMessage} from '../ReceivedChatMessage';
import {IReceivedChatMessageProps} from '../ReceivedChatMessage.types';

describe('ReceivedChatMessage Molecule', () => {
  const props: IReceivedChatMessageProps = {
    message: 'Hello',
  };

  it('renders the message', () => {
    const {getByText} = render(<ReceivedChatMessage {...props} />);
    expect(getByText('Hello')).toBeTruthy();
  });

  it('renders the avatar', () => {
    const {getByTestId} = render(<ReceivedChatMessage {...props} />);
    expect(getByTestId('avatar')).toBeTruthy();
  });
});
