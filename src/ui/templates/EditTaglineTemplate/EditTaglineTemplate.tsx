import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Input} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IEditTaglineTemplateProps} from './EditTaglineTemplate.types';
import {useStyles} from './useStyles';

export const EditTaglineTemplate = ({
  onPressBack,
  onPressUpdate,
  onPressCancel,
  tagline,
}: IEditTaglineTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (tagline.value.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [tagline.value]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Edit Tagline">
        <View style={baseStyles.inputContainer}>
          <Input {...tagline} />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button
            text="Save Changes"
            onPress={onPressUpdate}
            disabled={disabled}
          />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
