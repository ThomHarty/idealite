import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import {Button, Input, Typography} from '../../atoms';

import {TextHeader} from '../../molecules';
import {IRecoverPasswordTemplateProps} from './RecoverPasswordTemplate.types';
import {useStyles} from './useStyles';

export const RecoverPasswordTemplate = ({
  onPressBack,
  onPressNext,
  password,
  confirm,
}: IRecoverPasswordTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [visible, setVisible] = useState(false);
  const [confrimVisible, setConfirmVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (password.value.length > 6 && password.value === confirm.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password.value, confirm.value]);
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <TextHeader onPressBack={onPressBack} text="Recover account">
        <View style={baseStyles.container}>
          <View />
          <View style={baseStyles.centerContainer}>
            <View style={baseStyles.headingContainer}>
              <Typography text="Choose a new password" size="heading2" />
            </View>
            <View style={baseStyles.inputContainer}>
              <Input
                {...password}
                nativeProps={{
                  secureTextEntry: !visible,
                }}
                icon={visible ? 'visibility' : 'visibility'}
                iconOnPress={() => setVisible(current => !current)}
              />
            </View>
            <View style={baseStyles.inputContainer}>
              <Input
                {...confirm}
                nativeProps={{
                  secureTextEntry: !confrimVisible,
                }}
                icon={confrimVisible ? 'visibility' : 'visibility'}
                iconOnPress={() => setConfirmVisible(current => !current)}
              />
            </View>
          </View>
          <View style={baseStyles.buttonContainer}>
            <Button
              text="Change password"
              onPress={onPressNext}
              disabled={disabled}
            />
          </View>
        </View>
      </TextHeader>
    </Pressable>
  );
};
