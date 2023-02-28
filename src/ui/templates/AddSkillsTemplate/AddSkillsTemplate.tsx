import React, {ReactElement} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';

import {Button, Divider, Image, Typography} from '../../atoms';
import {EditNavItem, LogoHeader} from '../../molecules';
import {IAddSkillsTemplateProps} from './AddSkillsTemplate.types';
import {useStyles} from './useStyles';

export const AddSkillsTemplate = ({
  onPressBack,
  onPressNext,
  onPressAdd,
  avatar,
  skills,
  editOnPress,
}: IAddSkillsTemplateProps): ReactElement => {
  const baseStyles = useStyles();
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <LogoHeader onPressBack={onPressBack}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={baseStyles.container}>
            <View style={baseStyles.centerContainer}>
              <View style={baseStyles.avatarContainer}>
                <Image size="avatarMedium" src={avatar} />
              </View>
              <View style={baseStyles.headingContainer}>
                <Typography text="What are your skills?" size="heading2" />
              </View>
              <Divider />
              <ScrollView>
                <>
                  {skills.map((skill, i) => {
                    return (
                      <View key={i}>
                        <EditNavItem
                          text={skill}
                          onPress={() => editOnPress(skill)}
                        />
                      </View>
                    );
                  })}
                  <View style={baseStyles.addSkillContainer}>
                    <Button
                      onPress={onPressAdd}
                      text="Add skill"
                      variant="tertiary"
                      icon="plus"
                    />
                  </View>
                </>
              </ScrollView>
            </View>
            <View style={baseStyles.buttonContainer}>
              <Button
                text="Next"
                onPress={onPressNext}
                disabled={skills.length === 0}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </LogoHeader>
    </Pressable>
  );
};
