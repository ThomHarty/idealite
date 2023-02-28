import React, {ReactElement} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
} from 'react-native';

import {SwipeSpanner} from '../../../theme/svg';
import {Button, Image, Typography} from '../../atoms';
import {LogoHeader} from '../../molecules';
import {IAddSkillsPromptTemplateProps} from './AddSkillsPromptTemplate.types';
import {useStyles} from './useStyles';

export const AddSkillsPromptTemplate = ({
  onPressBack,
  onPressYes,
  onPressNo,
  avatar,
}: IAddSkillsPromptTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <LogoHeader onPressBack={onPressBack}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={baseStyles.container}>
            <View />
            <View style={baseStyles.centerContainer}>
              <View>
                <View style={baseStyles.avatarContainer}>
                  <Image size="avatarMedium" src={avatar} />
                </View>
                <View style={baseStyles.svgContainer}>
                  <SwipeSpanner />
                </View>
              </View>
              <View>
                <Typography
                  text="Do you want to add your skills?"
                  size="heading2"
                />
              </View>
            </View>
            <View style={baseStyles.buttonContainer}>
              <View style={baseStyles.topButtonContainer}>
                <Button text="Yes" onPress={onPressYes} />
              </View>
              <Button text="No" onPress={onPressNo} variant="secondary" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </LogoHeader>
    </Pressable>
  );
};
