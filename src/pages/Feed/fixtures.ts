const card = {
  order: 1, // remove - not needed
  onPress: () => console.log('pressed'),
  // swipeLeft
  // swipeRight
  swipeIcons: {
    leftOnPress: () => console.log('left pressed'),
    rightOnPress: () => console.log('right pressed'),
  },
  swipeUserInfo: {
    avatar: 'https://placeimg.com/640/480/people',
    title: 'Sustainable Fashion Brand',
    name: 'John Doe',
    distance: '22 miles away',
  },
  blurb:
    'Lorem ipsum dolor sit amet. Qui sunt illo qui labore illo id quos recusandae est possimus possimus nam enim quidem ut voluptatibus explicabo! Sit sunt iste in nihil quidem est facere nisi. Et vitae rerum eum ducimus beatae aut quas repellendus.',
  tags: ['Cyber security', 'Fashion', 'Sustainability'],
};

export const cards = [
  {...card},
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Jenny Doe',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Jimmy Doe',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Jane Doe',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Jess Doe',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Bob D.',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Ben D.',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Beatrice D.',
    },
  },
  {
    ...card,
    swipeUserInfo: {
      ...card.swipeUserInfo,
      name: 'Bill D.',
    },
  },
];
