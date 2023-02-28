import React, {ReactElement} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Icon} from '../../../shared/components';
import {COLORS} from '../../../theme';
import {IconButton, Typography} from '../../atoms';
import {AvatarStatus} from '../AvatarStatus/AvatarStatus';

import {baseStyles} from './AccountHeader.styles';
import {IAccountHeaderProps} from './AccountHeader.types';

export const AccountHeader = ({
  avatarStatus,
  name,
  title,
  location,
  joined,
  onPressEdit,
  onPressSeeMore,
}: IAccountHeaderProps): ReactElement => {
  return (
    <View style={baseStyles.container}>
      <View style={baseStyles.topContainer}>
        <View style={baseStyles.topLeftContainer}>
          <AvatarStatus {...avatarStatus} testID="avatar" />
          <View>
            <View style={baseStyles.nameContainer}>
              <Typography text={name} size="heading3" />
            </View>
            <View style={baseStyles.titleContainer}>
              <Typography text={title} size="tiny" />
            </View>
          </View>
        </View>
        <IconButton icon="edit" onPress={onPressEdit} testID="edit" />
      </View>
      <View style={baseStyles.textContainer}>
        <Text style={baseStyles.icon}>
          <Icon
            name="location"
            iconStyles={baseStyles.iconSize}
            testID="location"
          />
        </Text>
        <Typography text={location} size="tiny" color={COLORS.GREY_DARK} />
      </View>
      <View style={baseStyles.textContainer}>
        <Text style={baseStyles.icon}>
          <Icon
            name="calendar"
            iconStyles={baseStyles.iconSize}
            testID="calendar"
          />
        </Text>
        <Typography
          text={`Joined ${joined}`}
          size="tiny"
          color={COLORS.GREY_DARK}
        />
      </View>
      <Pressable style={baseStyles.textContainer} onPress={onPressSeeMore}>
        <Text style={baseStyles.moreIcon}>
          <Icon
            name="more"
            iconStyles={baseStyles.moreIconSize}
            testID="more"
          />
        </Text>
        <Typography text="See more" size="tiny" />
      </Pressable>
    </View>
  );
};
