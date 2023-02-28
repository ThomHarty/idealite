import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Input} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IEditSkillTemplateProps} from './EditSkillTemplate.types';
import {useStyles} from './useStyles';

export const EditSkillTemplate = ({
  onPressBack,
  onPressUpdate,
  onPressCancel,
  skill,
}: IEditSkillTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (skill.value.length > 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [skill.value]);
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Edit Skill">
        <View style={baseStyles.inputContainer}>
          <Input {...skill} />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button text="Update" onPress={onPressUpdate} disabled={disabled} />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
