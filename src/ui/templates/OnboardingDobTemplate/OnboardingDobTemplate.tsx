import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Input, Typography} from '../../atoms';
import {LogoHeader} from '../../molecules';
import {IOnboardingDobTemplateProps} from './OnboardingDobTemplate.types';
import {useStyles} from './useStyles';

export const OnboardingDobTemplate = ({
  onPressBack,
  onPressNext,
  day,
  month,
  year,
}: IOnboardingDobTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (
      day.value.length === 2 &&
      month.value.length === 2 &&
      year.value.length === 4
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [day, month, year]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <LogoHeader onPressBack={onPressBack}>
        <View />
        <View style={baseStyles.centerContainer}>
          <View style={baseStyles.headingContainer}>
            <Typography text="What's your date of birth?" size="heading2" />
          </View>
          <View style={baseStyles.inputContainer}>
            <View style={baseStyles.ddContainer}>
              <Input
                {...day}
                nativeProps={{
                  keyboardType: 'number-pad',
                  maxLength: 2,
                }}
              />
            </View>
            <View style={baseStyles.mmContainer}>
              <Input
                {...month}
                nativeProps={{
                  keyboardType: 'number-pad',
                  maxLength: 2,
                }}
              />
            </View>
            <View style={baseStyles.yyyyContainer}>
              <Input
                {...year}
                nativeProps={{
                  keyboardType: 'number-pad',
                  maxLength: 4,
                }}
              />
            </View>
          </View>
        </View>
        <View style={baseStyles.buttonContainer}>
          <Button text="Next" onPress={onPressNext} disabled={disabled} />
        </View>
      </LogoHeader>
    </Pressable>
  );
};
