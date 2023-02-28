import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import {Carousel} from '../Carousel';
import {ICarouselProps} from '../Carousel.types';

describe('Carousel Molecule', () => {
  const props: ICarouselProps = {
    items: [
      {content: <Text>one</Text>},
      {content: <Text>two</Text>},
      {content: <Text>three</Text>},
    ],
  };

  it('renders the carousel content', () => {
    const {getByText} = render(<Carousel {...props} />);

    expect(getByText('one')).toBeTruthy();
    expect(getByText('two')).toBeTruthy();
    expect(getByText('three')).toBeTruthy();
  });
});
