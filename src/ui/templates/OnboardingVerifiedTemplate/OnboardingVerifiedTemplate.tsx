import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {Icon} from '../../../shared/components';

import {Verify} from '../../../theme/svg';
import {Button, LinearBackground, Typography} from '../../atoms';
import {IOnboardingVerifiedTemplateProps} from './OnboardingVerifiedTemplate.types';
import {useStyles} from './useStyles';

export const OnboardingVerifiedTemplate = ({
  onPressNext,
}: IOnboardingVerifiedTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <LinearBackground>
      <View style={baseStyles.container}>
        <View />
        <View style={baseStyles.centerContainer}>
          <View style={baseStyles.card}>
            <View style={baseStyles.svgContainer}>
              <Verify />
            </View>
            <View style={baseStyles.iconContainer}>
              <Icon name="tick" iconStyles={baseStyles.icon} />
            </View>
            <Text style={baseStyles.textContainer}>
              <Typography
                text="Your account is now verified!"
                size="heading3"
              />
            </Text>
          </View>
        </View>
        <View style={baseStyles.buttonContainer}>
          <Button text="Continue" onPress={onPressNext} />
        </View>
      </View>
    </LinearBackground>
  );
};
