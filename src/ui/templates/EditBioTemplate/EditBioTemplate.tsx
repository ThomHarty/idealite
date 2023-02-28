import React, {ReactElement} from 'react';
import {Keyboard, Pressable, View} from 'react-native';

import {Button, TextArea, Typography} from '../../atoms';
import {TextHeader} from '../../molecules';
import {IEditBioTemplateProps} from './EditBioTemplate.types';
import {useStyles} from './useStyles';

export const EditBioTemplate = ({
  onPressBack,
  onPressUpdate,
  onPressCancel,
  name,
  textArea,
}: IEditBioTemplateProps): ReactElement => {
  const baseStyles = useStyles();

  return (
    <Pressable style={baseStyles.container} onPress={Keyboard.dismiss}>
      <TextHeader text="Edit Bio" onPressBack={onPressBack}>
        <View style={baseStyles.headingContainer}>
          <Typography text={`About ${name}`} size="text" />
        </View>
        <View style={baseStyles.textAreaContainer}>
          <TextArea {...textArea} limit={500} />
        </View>
      </TextHeader>
      <View style={baseStyles.buttonsContainer}>
        <View style={baseStyles.topButtonContainer}>
          <Button text="Update" onPress={onPressUpdate} />
        </View>
        <Button text="Cancel" onPress={onPressCancel} variant="secondary" />
      </View>
    </Pressable>
  );
};
