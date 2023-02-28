import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

import {Rewind} from '../../../theme/svg';
import {Button, LinearBackground, Link, Typography} from '../../atoms';
import {IFeedRewindAdCardProps} from './FeedRewindAdCard.types';
import {useStyles} from './useStyles';

export const FeedRewindAdCard = ({
  onPressJoin,
  onPressNo,
}: IFeedRewindAdCardProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      <LinearBackground borderRadius={20}>
        {/* top text */}
        <Text style={baseStyles.topTextContainer}>
          <Typography size="text" text="Idealite Premium" />
        </Text>
        {/* icon */}
        <View style={baseStyles.iconContainer}>
          <Rewind />
        </View>
        {/* heading */}
        <Text style={baseStyles.headingContainer}>
          <Typography size="heading3" text="Rewind your swipe" />
        </Text>
        {/* sub heading */}
        <Text style={baseStyles.subHeadingContainer}>
          <Typography size="text" text="for only £6.99 p/m" />
        </Text>
        {/* info */}
        <Text style={baseStyles.infoContainer}>
          <Typography
            size="tiny"
            text="Join the thousands of people signing up to Idealite Premium"
          />
        </Text>
        {/* bottom */}
        <View style={baseStyles.bottomContainer}>
          {/* button */}
          <View style={baseStyles.buttonContainer}>
            <Button text="Join now" onPress={onPressJoin} />
          </View>
          {/* link */}
          <View style={baseStyles.linkContainer}>
            <Link text="No thanks" onPress={onPressNo} />
          </View>
        </View>
      </LinearBackground>
    </View>
  );
};
