import {render} from '@testing-library/react-native';

import {SwipeUserInfo} from '../SwipeUserInfo';
import {ISwipeUserInfoProps} from '../SwipeUserInfo.types';

describe('SwipeUserInfo Molecule', () => {
  const props: ISwipeUserInfoProps = {
    avatar: '',
    title: 'title',
    name: 'name',
    distance: 'distance',
  };

  it('renders the title', () => {
    const {getByText} = render(<SwipeUserInfo {...props} />);
    expect(getByText('title')).toBeTruthy();
  });

  it('renders the name', () => {
    const {getByText} = render(<SwipeUserInfo {...props} />);
    expect(getByText('name')).toBeTruthy();
  });

  it('renders the distance', () => {
    const {getByText} = render(<SwipeUserInfo {...props} />);
    expect(getByText('distance')).toBeTruthy();
  });
});
