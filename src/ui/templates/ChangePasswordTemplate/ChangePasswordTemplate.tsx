import React, {ReactElement, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Input} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IChangePasswordTemplateProps} from './ChangePasswordTemplate.types';
import {useStyles} from './useStyles';

export const ChangePasswordTemplate = ({
  onPressBack,
  onPressUpdate,
  onPressCancel,
  oldPassword,
  newPassword,
  confirmNew,
}: IChangePasswordTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [oldVisible, setOldVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Change Password">
        <View style={baseStyles.inputContainer}>
          <Input
            {...oldPassword}
            nativeProps={{
              secureTextEntry: !oldVisible,
            }}
            icon={oldVisible ? 'visibility' : 'visibility'}
            iconOnPress={() => setOldVisible(current => !current)}
          />
        </View>
        <View style={baseStyles.inputContainer}>
          <Input
            {...newPassword}
            nativeProps={{
              secureTextEntry: !newVisible,
            }}
            icon={newVisible ? 'visibility' : 'visibility'}
            iconOnPress={() => setNewVisible(current => !current)}
          />
        </View>
        <View style={baseStyles.inputContainer}>
          <Input
            {...confirmNew}
            nativeProps={{
              secureTextEntry: !confirmVisible,
            }}
            icon={confirmVisible ? 'visibility' : 'visibility'}
            iconOnPress={() => setConfirmVisible(current => !current)}
          />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button text="Save Changes" onPress={onPressUpdate} />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
