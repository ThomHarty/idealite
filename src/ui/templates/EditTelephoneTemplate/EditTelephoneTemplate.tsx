import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {COLORS} from '../../../theme';
import {Button, Dropdown, Input, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IEditTelephoneTemplateProps} from './EditTelephoneTemplate.types';
import {useStyles} from './useStyles';

export const EditTelephoneTemplate = ({
  onPressBack,
  onPressSave,
  onPressCancel,
  code,
  phone,
}: IEditTelephoneTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (phone.value.length > 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone.value]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Edit Telephone">
        <View style={baseStyles.labelContainer}>
          <Typography text="Telephone" size="tiny" color={COLORS.GREY_DARK} />
        </View>
        <View style={baseStyles.inputContainer}>
          <View style={baseStyles.codeContainer}>
            <Dropdown {...code} />
          </View>
          <View style={baseStyles.phoneContainer}>
            <Input
              {...phone}
              nativeProps={{
                keyboardType: 'number-pad',
                maxLength: 12,
              }}
            />
          </View>
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button
            text="Save Changes"
            onPress={onPressSave}
            disabled={disabled}
          />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
