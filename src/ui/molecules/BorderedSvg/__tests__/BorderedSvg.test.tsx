import {render} from '@testing-library/react-native';
import {SwipeElectric} from '../../../../theme/svg';

import {BorderedSvg} from '../BorderedSvg';
import {IBorderedSvgProps} from '../BorderedSvg.types';

describe('BorderedSvg Molecule', () => {
  const props: IBorderedSvgProps = {
    svg: <SwipeElectric />,
    size: 'large',
    text: 'Text',
  };

  it('renders the text when size is large', () => {
    const {getByText} = render(<BorderedSvg {...props} />);
    expect(getByText('Text')).toBeTruthy();
  });

  it('does not render the text when size is small', () => {
    const {queryByText} = render(<BorderedSvg {...props} size="small" />);
    expect(queryByText('Text')).toBeFalsy();
  });
});
