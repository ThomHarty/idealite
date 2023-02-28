import {render} from '@testing-library/react-native';

import {ProfileHeader} from '../ProfileHeader';
import {IProfileHeaderProps} from '../ProfileHeader.types';

describe('ProfileHeader Molecule', () => {
  const props: IProfileHeaderProps = {
    name: 'Name',
    title: 'Title',
    location: 'Location',
    joined: 'March 2022',
  };

  it('renders the avatar', () => {
    const {getByTestId} = render(<ProfileHeader {...props} />);
    expect(getByTestId('avatar')).toBeTruthy();
  });

  it('renders the icons', () => {
    const {getByTestId} = render(<ProfileHeader {...props} />);
    expect(getByTestId('location')).toBeTruthy();
    expect(getByTestId('calendar')).toBeTruthy();
  });

  it('renders the text', () => {
    const {getByText} = render(<ProfileHeader {...props} />);
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Title')).toBeTruthy();
    expect(getByText('Location')).toBeTruthy();
    expect(getByText('Joined March 2022')).toBeTruthy();
  });
});
