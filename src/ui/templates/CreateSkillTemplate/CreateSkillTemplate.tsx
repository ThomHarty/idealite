import React, {ReactElement, useEffect, useState} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Input} from '../../atoms';
import {TextHeader} from '../../molecules';
import {ICreateSkillTemplateProps} from './CreateSkillTemplate.types';
import {useStyles} from './useStyles';

export const CreateSkillTemplate = ({
  onPressBack,
  onPressAdd,
  onPressCancel,
  skill,
}: ICreateSkillTemplateProps): ReactElement => {
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
      <TextHeader onPressBack={onPressBack} text="Add Skill">
        <View style={baseStyles.inputContainer}>
          <Input {...skill} />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={onPressCancel ? baseStyles.topButtonContainer : {}}>
          <Button text="Save" onPress={onPressAdd} disabled={disabled} />
        </View>
        {onPressCancel && (
          <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
        )}
      </View>
    </Pressable>
  );
};
