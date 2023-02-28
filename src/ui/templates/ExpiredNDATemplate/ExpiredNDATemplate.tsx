import React, {ReactElement} from 'react';
import {View} from 'react-native';

import {COLORS} from '../../../theme';
import {Button, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IExpiredNDATemplateProps} from './ExpiredNDATemplate.types';
import {useStyles} from './useStyles';

export const ExpiredNDATemplate = ({
  onPressBack,
}: IExpiredNDATemplateProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <View style={baseStyles.container}>
      <TextHeader text="NDA" onPressBack={onPressBack}>
        <View style={baseStyles.bodyContainer}>
          <Typography
            text="This NDA has expired"
            size="heading3"
            color={COLORS.GREY_DARK}
          />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <Button text="Go back" onPress={onPressBack} variant="secondary" />
      </View>
    </View>
  );
};
