import React, {ReactElement} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Icon} from '../../../shared/components';

import {Meet} from '../../../theme/svg';
import {Button, Typography} from '../../atoms';
import {IFeedNoUsersCardProps} from './FeedNoUsersCard.types';
import {useStyles} from './useStyles';

export const FeedNoUsersCard = ({
  onPressContinue,
  onPressFilter,
}: IFeedNoUsersCardProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      {/* top text */}
      <Pressable style={baseStyles.topIconContainer} onPress={onPressFilter}>
        <Text style={baseStyles.icon}>
          <Icon name="filter" iconStyles={baseStyles.filterIcon} />
        </Text>
      </Pressable>
      {/* icon */}
      <View style={baseStyles.iconContainer}>
        <Meet />
      </View>
      {/* heading */}
      <Text style={baseStyles.headingContainer}>
        <Typography size="heading3" text="No users found within your filters" />
      </Text>
      {/* info */}
      <Text style={baseStyles.infoContainer}>
        <Typography
          size="tiny"
          text="Showing you users from outside of your maximum distance. Change your filter query for more accurate results."
        />
      </Text>
      {/* bottom */}
      <View style={baseStyles.bottomContainer}>
        {/* button */}
        <View style={baseStyles.buttonContainer}>
          <Button text="Continue" onPress={onPressContinue} />
        </View>
      </View>
    </View>
  );
};
