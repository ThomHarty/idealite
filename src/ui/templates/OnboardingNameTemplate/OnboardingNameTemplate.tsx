import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import {Button, Input, Typography} from '../../atoms';

import {LogoHeader} from '../../molecules';
import {IOnboardingNameTemplateProps} from './OnboardingNameTemplate.types';
import {useStyles} from './useStyles';

export const OnboardingNameTemplate = ({
  onPressBack,
  onPressNext,
  name,
}: IOnboardingNameTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (name.value.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name.value]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <LogoHeader onPressBack={onPressBack}>
        <View />
        <View style={baseStyles.centerContainer}>
          <View style={baseStyles.headingContainer}>
            <Typography text="What's your name?" size="heading2" />
          </View>
          <View style={baseStyles.inputContainer}>
            <Input {...name} />
          </View>
        </View>
        <View style={baseStyles.buttonContainer}>
          <Button text="Next" onPress={onPressNext} disabled={disabled} />
        </View>
      </LogoHeader>
    </Pressable>
  );
};
