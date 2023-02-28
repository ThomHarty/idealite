import React, {ReactElement, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  View,
} from 'react-native';

import {SignIn} from '../../../theme/svg';
import {Button, Input, Link} from '../../atoms';
import {LogoHeader} from '../../molecules';
import {ISignInTemplateProps} from './SignInTemplate.types';
import {useStyles} from './useStyles';

export const SignInTemplate = ({
  onPressBack,
  email,
  password,
  onPressTrouble,
  onPressSignIn,
}: ISignInTemplateProps): ReactElement => {
  const [visible, setVisible] = useState(false);
  const baseStyles = useStyles();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable onPress={Keyboard.dismiss}>
        <LogoHeader onPressBack={onPressBack}>
          <View style={baseStyles.container}>
            <View>
              <View style={baseStyles.topContainer}>
                <View style={baseStyles.svgContainer}>
                  <SignIn />
                </View>
              </View>
              <View style={baseStyles.formContainer}>
                <View style={baseStyles.inputsContainer}>
                  <View style={baseStyles.inputContainer}>
                    <Input
                      {...email}
                      nativeProps={{
                        keyboardType: 'email-address',
                        autoCapitalize: 'none',
                        autoCorrect: false,
                      }}
                    />
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
                </View>
                <View style={baseStyles.linkContainer}>
                  <Link
                    text="Having trouble signing in?"
                    onPress={onPressTrouble}
                  />
                </View>
              </View>
            </View>
            <View style={baseStyles.buttonContainer}>
              <Button text="Sign In" onPress={onPressSignIn} />
            </View>
          </View>
        </LogoHeader>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
