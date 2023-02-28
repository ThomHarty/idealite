import React, {memo, ReactElement} from 'react';
import Animated from 'react-native-reanimated';

import {IImageProps} from './Image.types';
import {baseStyles} from './Image.styles';
import {useLayoutStyles} from './animations';

export const Image = memo(
  ({src, size = 'default', testID}: IImageProps): ReactElement => {
    const {layout} = useLayoutStyles(size);
    return (
      <Animated.Image
        testID={testID || 'image'}
        source={{uri: src}}
        style={[baseStyles.image, layout.image]}
      />
    );
  },
);
