import React, {ReactElement} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, Checkbox, Dropdown, Input, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IAddExperienceTemplateProps} from './AddExperienceTemplate.types';
import {useStyles} from './useStyles';

export const AddExperienceTemplate = ({
  onPressBack,
  onPressSave,
  onPressCancel,
  title,
  institution,
  current,
  start,
  end,
}: IAddExperienceTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <Pressable onPress={Keyboard.dismiss} style={baseStyles.container}>
      <TextHeader onPressBack={onPressBack} text="Add Experience">
        <View style={baseStyles.inputContainer}>
          <Input {...title} />
        </View>
        <View style={baseStyles.secondInputContainer}>
          <Input {...institution} />
        </View>
        <View style={baseStyles.checkboxContainer}>
          <Checkbox {...current} />
          <View style={baseStyles.checkboxTextContainer}>
            <Typography text="I currently work in this role" size="text" />
          </View>
        </View>
        <View style={baseStyles.dropdownsContainer}>
          <View style={baseStyles.dropdownWrapper}>
            <Dropdown {...start} label="Start date" />
          </View>
          <View style={baseStyles.dropdownWrapper}>
            <Dropdown {...end} label="End date" />
          </View>
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button text="Save" onPress={onPressSave} />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
