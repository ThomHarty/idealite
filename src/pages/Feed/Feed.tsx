import React, {ReactElement, useCallback, useEffect, useState} from 'react';
import {ISwipeCardProps} from '../../ui/organisms';

import {IFeedTemplateProps, FeedTemplate} from '../../ui/templates';
import {cards} from './fixtures';

export const Feed = ({navigation}: any): ReactElement => {
  const [activeCards, setActiveCards] = useState<ISwipeCardProps[]>([]);
  const [swipedRight, setSwipedRight] = useState<string[]>([]);
  const [swipedLeft, setSwipedLeft] = useState<string[]>([]);

  const handleSwiped = (name: string) => {
    const copy = [...activeCards].filter((card, i) => {
      return card.swipeUserInfo.name !== name; // replace with id
    });

    setActiveCards(copy);
  };

  const onSwipedRight = (name?: string) => {
    handleSwiped(name!);
    setSwipedRight(current => [...current, name!]);
  };

  const onSwipedLeft = (name?: string) => {
    handleSwiped(name!);
    setSwipedLeft(current => [...current, name!]);
  };

  useEffect(() => {
    setActiveCards(
      cards.map((card, i) => {
        return {...card};
      }),
    );
  }, []);

  console.log('active cards top level: ', activeCards.length);
  console.log('swiped right: ', swipedRight);
  console.log('swiped left: ', swipedLeft);

  const props: IFeedTemplateProps = {
    cards: activeCards,
    onSwipedLeft,
    onSwipedRight,
  };

  return <FeedTemplate {...props} />;
};
