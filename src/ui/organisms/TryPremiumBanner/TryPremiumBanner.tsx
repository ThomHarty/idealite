import React, {ReactElement} from 'react';
import {Pressable, View} from 'react-native';

import {COLORS} from '../../../theme';
import {Icon} from '../../../theme/svg';
import {Icon as SharedIcon} from '../../../shared/components/Icon/Icon';
import {LinearBackground, Typography} from '../../atoms';
import {ITryPremiumBannerProps} from './TryPremiumBanner.types';
import {useStyles} from './useStyles';

export const TryPremiumBanner = ({
  onPress,
}: ITryPremiumBannerProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <Pressable style={baseStyles.container} onPress={onPress}>
      <LinearBackground>
        <View style={baseStyles.contentContainer}>
          <View style={baseStyles.iconContainer}>
            <View style={baseStyles.iconButtonContainer}>
              <SharedIcon name="star" iconStyles={baseStyles.sharedIcon} />
            </View>
            <View style={baseStyles.icon}>
              <Icon />
            </View>
          </View>
          <View style={baseStyles.textContainer}>
            <View style={baseStyles.headingContainer}>
              <Typography text="Try Idealite " size="cta" />
              <Typography text="Premium" size="cta" color={COLORS.PREMIUM} />
            </View>
            <View style={baseStyles.infoContainer}>
              <Typography
                text="Unlock more features and extend your reach!"
                size="tiny"
              />
            </View>
          </View>
        </View>
      </LinearBackground>
    </Pressable>
  );
};
