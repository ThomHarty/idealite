import {fireEvent, render} from '@testing-library/react-native';

import {MessagesListItem} from '../MessagesListItem';
import {IMessagesListItemProps} from '../MessagesListItem.types';

describe('MessagesListItem Molecule', () => {
  const props: IMessagesListItemProps = {
    name: 'Amir',
    title: 'Lorem ipsum',
    message: 'message',
    onPress: jest.fn(),
    avatarStatus: {},
  };

  it('renders the name', () => {
    const {getByText} = render(<MessagesListItem {...props} />);
    expect(getByText('Amir')).toBeTruthy();
  });

  it('renders the title', () => {
    const {getByText} = render(<MessagesListItem {...props} />);
    expect(getByText('Lorem ipsum')).toBeTruthy();
  });

  it('renders the message', () => {
    const {getByText} = render(<MessagesListItem {...props} />);
    expect(getByText('message')).toBeTruthy();
  });

  it('renders the avatarStatus', () => {
    const {getByTestId} = render(<MessagesListItem {...props} />);
    expect(getByTestId('avatar-status')).toBeTruthy();
  });

  it('handles the onPress callback', () => {
    const {getByTestId} = render(<MessagesListItem {...props} />);
    fireEvent.press(getByTestId('press'));
    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('renders the star icon when superlike is true', () => {
    const {getByTestId} = render(<MessagesListItem {...props} superlike />);
    expect(getByTestId('star-icon')).toBeTruthy();
  });
});
