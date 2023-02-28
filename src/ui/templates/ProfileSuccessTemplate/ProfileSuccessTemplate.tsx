import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

import {Icon} from '../../../shared/components';
import {COLORS} from '../../../theme';
import {Button, Typography} from '../../atoms';
import {LogoHeader} from '../../molecules';
import {IProfileSuccessTemplateProps} from './ProfileSuccessTemplate.types';
import {useStyles} from './useStyles';

export const ProfileSuccessTemplate = ({
  onPressNext,
}: IProfileSuccessTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <View style={baseStyles.container}>
      <LogoHeader>
        <View />
        <View style={baseStyles.centerContainer}>
          <View style={baseStyles.iconContainer}>
            <Icon name="tick" iconStyles={baseStyles.icon} />
          </View>
          <Text style={baseStyles.textContainer}>
            <Typography text="You're all set!" size="heading3" />
          </Text>
          <Text style={baseStyles.infoContainer}>
            <Typography
              text="You can update/edit your Idealite profile anytime from your settings."
              color={COLORS.GREY_DARK}
              size="tiny"
              lineHeight={21}
            />
          </Text>
        </View>
        <View style={baseStyles.buttonContainer}>
          <Button text="Take me to the app" onPress={onPressNext} />
        </View>
      </LogoHeader>
    </View>
  );
};
