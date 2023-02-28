import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

import {Location} from '../../../theme/svg';
import {Button, Link, Typography} from '../../atoms';
import {LogoHeader} from '../../molecules';
import {IEnableLocationTemplateProps} from './EnableLocationTemplate.types';
import {useStyles} from './useStyles';

export const EnableLocationTemplate = ({
  onPressAllow,
  onPressWhy,
  onPressBack,
}: IEnableLocationTemplateProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      <LogoHeader onPressBack={onPressBack}>
        <View />
        <View style={baseStyles.centerContainer}>
          <View style={baseStyles.svgContainer}>
            <Location />
          </View>
          <Text style={baseStyles.headingContainer}>
            <Typography text="Enable location" size="heading2" />
          </Text>
          <Text style={baseStyles.infoContainer}>
            <Typography
              text="Please grant permission in your system preferences for Idealite to use your location"
              size="tiny"
            />
          </Text>
          <Text style={baseStyles.linkContainer}>
            <Link text="Why do you need my location?" onPress={onPressWhy} />
          </Text>
        </View>
        <View style={baseStyles.buttonContainer}>
          <Button text="Allow location" onPress={onPressAllow} />
        </View>
      </LogoHeader>
    </View>
  );
};
