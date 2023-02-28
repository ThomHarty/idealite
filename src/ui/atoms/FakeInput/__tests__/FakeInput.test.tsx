import React from 'react';
import {render} from '@testing-library/react-native';

import {FakeInput} from '../FakeInput';
import {IFakeInputProps} from '../FakeInput.types';

describe('FakeInput Atom', () => {
  const props: IFakeInputProps = {
    label: 'label',
    text: 'text',
  };

  it('renders the label', () => {
    const {getByText} = render(<FakeInput {...props} />);
    expect(getByText('label')).toBeTruthy();
  });

  it('renders the text', () => {
    const {getByText} = render(<FakeInput {...props} />);
    expect(getByText('text')).toBeTruthy();
  });
});
