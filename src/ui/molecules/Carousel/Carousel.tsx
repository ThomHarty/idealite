import {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {ActiveCircle} from '../../atoms';
import {ICarouselProps} from './Carousel.types';
import {useStyles} from './useStyles';

export const Carousel = memo(
  ({
    current = 1,
    items,
    onActiveSlideChanged,
  }: ICarouselProps): ReactElement => {
    const scrollRef = useRef<ScrollView>(null);
    const {width} = useWindowDimensions();
    const baseStyles = useStyles();
    const [activeSlide, setActiveSlide] = useState(current);

    const handleSlide = useCallback((x: number) => {
      setActiveSlide(x / width + 1);
      onActiveSlideChanged && onActiveSlideChanged(x / width + 1);
    }, []);

    useEffect(() => {
      setActiveSlide(current);
      scrollRef.current?.scrollTo({
        x: width * (current - 1),
      });
    }, [current]);

    return (
      <>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          snapToInterval={width}
          decelerationRate="fast"
          onScrollEndDrag={event =>
            handleSlide(event.nativeEvent.targetContentOffset!.x)
          }>
          {items.map((item, key) => {
            return (
              <View key={key} style={baseStyles.contentContainer}>
                {item.content}
              </View>
            );
          })}
        </ScrollView>
        <View style={baseStyles.circlesContainer}>
          {items.map((_, key) => {
            return (
              <View key={key} style={baseStyles.circleWrapper}>
                <ActiveCircle active={key + 1 === activeSlide} />
              </View>
            );
          })}
        </View>
      </>
    );
  },
);
