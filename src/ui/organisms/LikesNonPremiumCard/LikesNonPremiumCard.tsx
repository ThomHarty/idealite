import React, {ReactElement} from 'react';

import {Text, View} from 'react-native';
import {Swiped} from '../../../theme/svg';
import {Button, LinearBackground, Typography} from '../../atoms';
import {ILikesNonPremiumCardProps} from './LikesNonPremiumCard.types';
import {useStyles} from './useStyles';

export const LikesNonPremiumCard = ({
  onPressJoinNow,
}: ILikesNonPremiumCardProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <View style={baseStyles.container}>
      <View style={baseStyles.cardContainer}>
        <LinearBackground borderRadius={20}>
          {/* top text */}
          <Text style={baseStyles.topTextContainer}>
            <Typography size="text" text="Idealite Premium" />
          </Text>
          {/* icon */}
          <View style={baseStyles.iconContainer}>
            <Swiped />
          </View>
          {/* heading */}
          <Text style={baseStyles.headingContainer}>
            <Typography size="heading3" text="See who swiped you" />
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
              <Button text="Join now" onPress={onPressJoinNow} />
            </View>
          </View>
        </LinearBackground>
      </View>
    </View>
  );
};
