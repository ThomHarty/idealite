import React from 'react';
import {render} from '@testing-library/react-native';

import {TextTabs} from '../TextTabs';
import {ITextTabsProps} from '../TextTabs.types';
import {Text} from 'react-native';

describe('TextTabs Atom', () => {
  const props: ITextTabsProps = {
    tabOneContent: <Text>One</Text>,
    tabTwoContent: <Text>Two</Text>,
    tabThreeContent: <Text>Three</Text>,
    tabFourContent: <Text>Four</Text>,
  };

  it('renders the tab headings', () => {
    const {getByText} = render(<TextTabs {...props} />);
    expect(getByText('Bio')).toBeTruthy();
    expect(getByText('Idea')).toBeTruthy();
    expect(getByText('Skills')).toBeTruthy();
    expect(getByText('Experience')).toBeTruthy();
  });

  it('renders the tab content', () => {
    const {getByText} = render(<TextTabs {...props} />);
    expect(getByText('One')).toBeTruthy();
    expect(getByText('Two')).toBeTruthy();
    expect(getByText('Three')).toBeTruthy();
    expect(getByText('Four')).toBeTruthy();
  });
});
