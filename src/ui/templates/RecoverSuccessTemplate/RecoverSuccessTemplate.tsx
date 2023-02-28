import React, {ReactElement} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';

import {Icon} from '../../../shared/components';
import {Button, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IRecoverSuccessTemplateProps} from './RecoverSuccessTemplate.types';
import {useStyles} from './useStyles';

export const RecoverSuccessTemplate = ({
  onPressNext,
}: IRecoverSuccessTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <TextHeader text="Recover account">
        <View style={baseStyles.container}>
          <View />
          <View style={baseStyles.centerContainer}>
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
          <View style={baseStyles.buttonContainer}>
            <Button text="Continue" onPress={onPressNext} />
          </View>
        </View>
      </TextHeader>
    </Pressable>
  );
};
