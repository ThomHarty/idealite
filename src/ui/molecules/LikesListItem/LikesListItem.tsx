import React, {memo, ReactElement} from 'react';
import {View, Image as RNImage, Pressable} from 'react-native';

import {Image, Typography} from '../../atoms';
import {ILikesListItemProps} from './LikesListItem.types';
import {SvgSwitch} from '../../../shared/components';
import {useStyles} from './useStyles';

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
import {COLORS} from '../../../theme';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const LikesListItem = memo(
  ({
    id,
    avatar,
    name,
    title,
    svg,
    onPress,
  }: ILikesListItemProps): ReactElement => {
    const baseStyles = useStyles();
    return (
      <Pressable
        onPress={() => onPress(id)}
        style={baseStyles.container}
        testID="press">
        <View style={baseStyles.avatarContainer}>
          <Image
            testID="avatar"
            src={avatar || DEFAULT_IMAGE}
            size="avatarSmall"
          />
        </View>
        <View style={baseStyles.textContainer}>
          <Typography text={name} size="small" />
          <Typography
            text={title}
            size="tiny"
            color={COLORS.GREY_DARK}
            nativeProps={{
              numberOfLines: 1,
            }}
          />
        </View>
        <View style={baseStyles.svgContainer}>
          <SvgSwitch svg={svg} testID="svg" />
        </View>
      </Pressable>
    );
  },
);
