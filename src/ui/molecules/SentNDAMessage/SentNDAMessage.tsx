import React, {ReactElement} from 'react';
import {View, Image as RNImage, Pressable} from 'react-native';

import {ISentNDAMessageProps} from './SentNDAMessage.types';
import {Divider, Image, Typography} from '../../atoms';
import {useStyles} from './useStyles';
import {COLORS} from '../../../theme';

// @ts-ignore
import DefaultImage from '../../../theme/images/avatar-placeholder.png';
import {afterName, beforeName} from './fixtures/message';
import {Icon} from '../../../shared/components';
const DEFAULT_IMAGE = RNImage.resolveAssetSource(DefaultImage).uri;

export const SentNDAMessage = ({
  avatar,
  name,
  readTime,
  onPress,
}: ISentNDAMessageProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <>
      <View style={baseStyles.container}>
        <View style={baseStyles.messageContainer}>
          <View style={baseStyles.headingWrapper}>
            <Typography text="Non-disclosure agreement" size="small" />
          </View>
          <Divider color={COLORS.PRIMARY_10} />
          <View style={baseStyles.messageWrapper}>
            <Typography
              text={`${beforeName}${name}${afterName}`}
              size="small"
              lineHeight={21}
            />
          </View>
          <Divider color={COLORS.PRIMARY_10} />
          <Pressable style={baseStyles.footerWrapper} onPress={onPress}>
            <Typography text="View NDA" size="small" />
            <Icon testID="icon" name="right-chevron" />
          </Pressable>
        </View>
        <View style={baseStyles.avatarContainer}>
          <Image
            testID="avatar"
            src={avatar || DEFAULT_IMAGE}
            size="avatarTiny"
          />
        </View>
      </View>
      {readTime && (
        <View style={baseStyles.readContainer}>
          <Typography
            text={`Read: ${readTime}`}
            size="tiny"
            color={COLORS.GREY}
          />
        </View>
      )}
    </>
  );
};
