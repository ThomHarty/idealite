import React, {memo, ReactElement} from 'react';
import {ImageBackground as ImgBackground} from 'react-native';

import {IImageBackgroundProps} from './ImageBackground.types';

export const ImageBackground = memo(
  ({src, containerStyles, children}: IImageBackgroundProps): ReactElement => {
    return (
      <ImgBackground
        testID="image-background"
        source={{uri: src}}
        resizeMode="cover"
        style={containerStyles}>
        {children}
      </ImgBackground>
    );
  },
);
