import {render} from '@testing-library/react-native';

import {ChatDayDivider} from '../ChatDayDivider';
import {IChatDayDividerProps} from '../ChatDayDivider.types';

describe('ChatDayDivider Molecule', () => {
  const props: IChatDayDividerProps = {
    text: 'Yesterday',
  };

  it('renders the divider', () => {
    const {getByTestId} = render(<ChatDayDivider {...props} />);
    expect(getByTestId('divider')).toBeTruthy();
  });

  it('renders the text', () => {
    const {getByText} = render(<ChatDayDivider {...props} />);
    expect(getByText('Yesterday')).toBeTruthy();
  });
});
